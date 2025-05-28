
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router"

export function Cart () {
    const { cart } = useContext(CartContext)


    return(
        <div className=" w-full  max-w-7xl mx-auto " >
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
                className=" flex items-center justify-between py-2 border-b-2 border-gray-300 " >

                <img 
                    className="w-28"
                    src={item.cover} 
                    alt={item.title}
                />

                <strong> Preço: {item.price.toLocaleString("pt-br", {
                    style:"currency",
                    currency:"BRL"
                })}</strong>

                <div className=" flex items-center justify-center gap-3 " >
                    <button className=" bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center " >
                        -
                    </button>
                    {item.amount}
                    <button className=" bg-slate-600 px-1 rounded text-white font-medium flex items-center justify-center " >
                        +
                    </button>
                </div>

                <strong className=" float-right" >
                    Subtotal: {item.total.toLocaleString("pt-br", {
                        style:"currency",
                        currency:"BRL"
                    })}
                </strong>

            </section>  
            ))}

            {cart.length !== 0 && <p className="font-bold mt-4" >Total: R$ 8149,00</p> }

        </div>
    )
}