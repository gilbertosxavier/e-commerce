
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router"

export function Cart () {
    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)


    return(
        <div className=" w-full  max-w-7xl mx-auto mt-20 " >
            <h1 className=" font-medium text-2xl text-center my-4 " >Carrinho</h1>


            {cart.length === 0 && (
                <div className=" flex flex-col items-center justify-center" >
                    <p className=" font-medium" >Que pena, seu carrinho está vazio...</p>
                    <Link  to="/"
                    className="bg-slate-600 my-3 px-3 p-1 text-white font-medium rounded"
                    >
                        Acessar produtos
                    </Link>
                </div>
            )}

            {cart.map((item)=>(
                <section  key={item.id} 
                className=" flex items-center justify-between gap-3 py-2 border-b-2 border-gray-300 " >

                <img 
                    className="w-20 md:w-28"
                    src={item.cover} 
                    alt={item.title}
                />

                <strong> Preço: {item.price.toLocaleString("pt-br", {
                    style:"currency",
                    currency:"BRL"
                })}</strong>

                <div className=" flex items-center justify-center gap-2 " >
                    <button onClick={()=> removeItemCart(item)}  className=" bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer" >
                        -
                    </button>
                    {item.amount}
                    <button onClick={()=> addItemCart(item)}  className=" bg-slate-600 px-[6px] rounded text-white font-medium flex items-center justify-center cursor-pointer" >
                        +
                    </button>
                </div>

                <strong className=" float-right text-right px-2" >
                    Subtotal: {item.total.toLocaleString("pt-br", {
                        style:"currency",
                        currency:"BRL"
                    })}
                </strong>

            </section>  
            ))}

            {cart.length !== 0 && <p className="font-bold mt-4" >Total: {total}</p> }

        </div>
    )
}