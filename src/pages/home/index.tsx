
import { useEffect, useState, useContext, } from "react"
import { Link } from "react-router";
import { BsCartPlus } from "react-icons/bs"
import { fetchProducts } from "../../services/firebaseApi"
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";


export interface ProductProps{
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string
}

export function Home () {
    const {addItemCart} = useContext(CartContext)
    const [products, setProducts] = useState<ProductProps[]>([]);

useEffect(()=>{



    async function getProducts(){
        const response = await fetchProducts()
        setProducts(response)
    }

    getProducts();
},[])


function handleAddCartItem (product: ProductProps){
    toast.success("Produto adicionado ao carrinho!", {
        style:{
            borderRadius: 8,
            backgroundColor:"#121212",
            color:"#ffffff"
        }
    })
    addItemCart(product)
}

    return(
        <div>
            <main className=" w-full max-w-7xl px-4 mx-auto  mt-20" >
                <h1 className="font-bold text-3xl mb-4 mt-10 text-center" >Produtos em alta</h1>

                <div className="  grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5 " >

                    {products.map((product)=>(

                    <section className=" w-full flex flex-col gap-2 shadow-[0px_0px_31px_5px_#c4c4c4] p-4 rounded-md" key={product.id} >
                        <div className=" flex-1">
                            <Link to={`/product/${product.id}`} >
                                <img 
                                    className=" w-9/12 md:w-11/12 mx-auto hover:scale-105  transition-all "
                                    src={product.cover} 
                                    alt={product.title} 
                                /> 
                            </Link>

                        </div>



                        <div className=" flex-1 flex flex-col items-center  justify-end " >
                        <p className=" font-medium mt-1 mb-2 " >
                            {product.title}
                        </p>

                        <div className="flex items-center justify-center gap-3">
                            <strong className="" >
                                {product.price.toLocaleString("pt-br", {
                                    style:"currency",
                                    currency:"BRL"
                                })}
                            </strong>

                            <button 
                            onClick={()=>handleAddCartItem(product)}
                                className="bg-zinc-900 p-2 rounded hover:scale-110 transition-all hover:bg-zinc-700 cursor-pointer" >
                                <BsCartPlus size={20} color="#ffffff" />
                            </button>
                        </div>

                        </div>

                    </section> 
                    ))}

                </div>
            </main>
        </div>
    )
}