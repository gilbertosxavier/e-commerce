import { createContext,type ReactNode , useState } from "react";
import { type ProductProps } from "../pages/home";

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProductProps)=> void;
    removeItemCart: (product: CartProps)=> void;
    total: string;
}

interface CartProps {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps{
    children: ReactNode;
}

export const CartContext = createContext ({} as CartContextData)

function CartProvider ({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addItemCart (newItem: ProductProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if( indexItem !== -1 ){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount +1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            totalResultCard(cartList);
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data]);
        totalResultCard([...cart, data]);

    }

    function removeItemCart (product: CartProps){
        const indexItem = cart.findIndex(item=> item.id === product.id);
        
        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;

            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCard(cartList);

            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id)

        setCart(removeItem);
        totalResultCard(removeItem);
    }

    function totalResultCard (items: CartProps[]){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0);

        const resultFormated =  result.toLocaleString("pt-br",{style:"currency", currency:"BRL"});

        setTotal(resultFormated);
    }

    return(
        <CartContext.Provider 
        value={{ 
            cart, 
            cartAmount:cart.length,
            addItemCart,
            removeItemCart,
            total
            }} 
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;