
import { useEffect, useState } from "react"
import { BsCartPlus } from "react-icons/bs"
import { api } from "../../services/api"

interface ProductProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string
}

export function Home () {
    const [products, setProducts] = useState<ProductProps[]>([]);

useEffect(()=>{
    async function getProducts(){
        const response = await api.get("products")
        setProducts(response.data)
    }

    getProducts();
},[])


    return(
        <div>
            <main className=" w-full max-w-7xl px-4 mx-auto " >
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center" >Produtos em alta</h1>

                <div className="  grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5 " >

                    {products.map((product)=>(

                    <section className=" w-full " key={product.id} >
                        <img 
                        className=" w-full rounded-lg max-h-72 mb-2 "
                        src="https://m.media-amazon.com/images/I/41uS5ZSX9yL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                        alt={product.title} 
                        />

                        <p className=" font-medium mt-1 mb-2 " >
                            {product.title}
                        </p>

                        <div className=" flex items-center gap-3 " >
                            <strong>
                                {product.price.toLocaleString("pt-br", {
                                    style:"currency",
                                    currency:"BRL"
                                })}
                            </strong>

                            <button className="  bg-zinc-900 p-1 rounded " >
                                <BsCartPlus size={20} color="#ffffff" />
                            </button>
                        </div>

                    </section> 
                    ))}

                </div>
            </main>
        </div>
    )
}