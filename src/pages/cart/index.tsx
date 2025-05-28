

export function Cart () {
    return(
        <div className=" w-full  max-w-7xl mx-auto " >
            <h1 className=" font-medium text-2xl text-center my-4 " >Página Cart</h1>

            <section className=" flex items-center justify-between py-2 border-b-2 border-gray-300 " >

                <img 
                    className=" w-28"
                    src="https://m.media-amazon.com/images/I/41uS5ZSX9yL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                    alt="Foto produto"
                />

                <strong> Preço: R$ 8149,00</strong>

                <div className=" flex items-center justify-center gap-3 " >
                    <button className=" bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center " >
                        -
                    </button>
                    1
                    <button className=" bg-slate-600 px-1 rounded text-white font-medium flex items-center justify-center " >
                        +
                    </button>
                </div>

                <strong className=" float-right" >
                    Subtotal: R$ 8149,00
                </strong>

            </section>

            <p className="font-bold mt-4" >Total: R$ 8149,00</p>
        </div>
    )
}