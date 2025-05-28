import { BsCartPlus } from "react-icons/bs"

export function Home () {
    return(
        <div>
            <main className=" w-full max-w-7xl px-4 mx-auto " >
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center" >Produtos em alta</h1>

                <div className="  grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5 " >
                    <section className=" w-full  " >
                        <img 
                        className="  rounded-lg max-h-50 mb-2 "
                        src="https://m.media-amazon.com/images/I/41uS5ZSX9yL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                        alt="foto do produto" 
                        />

                        <p className=" font-medium mt-1 mb-2 " >S25 Ultra</p>

                        <div className=" flex items-center gap-3 " >
                            <strong>
                                R$ 8.149,00
                            </strong>

                            <button className="  bg-zinc-900 p-1 rounded " >
                                <BsCartPlus size={20} color="#ffffff" />
                            </button>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    )
}