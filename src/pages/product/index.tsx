import { BsCartPlus } from "react-icons/bs";
import { useParams , useNavigate} from "react-router";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { type ProductProps } from "../home";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";


export function Product (){
    
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();
    const { addItemCart } = useContext(CartContext)

    const [product, setProduct] = useState<ProductProps | undefined >();
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function getProduct() {
            setLoading(true);
            try{
                const response = await api.get(`/products/${id}`)
                setProduct(response.data)
                setLoading(false)
            } catch(error){
                console.log("ERRO AO BUSCAR DADOS: ", error);
                toast.error("Não foi possível carregar o produto. Redirecionado para a página inicial");
                navigate("/")
            } finally{
                setLoading(false)
            }
        }
        getProduct();
    },[id])

    function handleAddCartItem(product: ProductProps){
        toast.success("Produto Adicionado ao carrinho!", {
            style:{
                borderRadius: 8,
                backgroundColor:"#121212",
                color:"#ffffff"
            }
        })
        addItemCart(product)
        navigate("/cart")
    }


    if(loading) {
        return(
            <div className="flex justify-center items-center mx-auto">
                <h1 className=" font-bold text-2xl " >
                    Carregando produto...
                </h1>
            </div>

        )
    }

    if (!product) { 
        return (
            <div className="w-full h-[90vh] flex items-center justify-center">
                <p>O produto não foi encontrado.</p>
            </div>
        );
    }

    return(


        <div className="w-full h-auto flex items-center justify-center mt-20"  >
            <section className=" w-full max-w-7xl h-10/12 flex flex-col md:flex-row items-center justify-center gap-4 mx-auto py-6 ">
                    <div className=" flex-1 ">
                        <img  
                            className=" w-full max-w-lg h-auto mx-auto object-cover"
                            src={product?.cover} 
                            alt={product?.title} 
                        />
                        </div>

                    <div className=" flex-1 h-full flex flex-col justify-center gap-4 px-3">
                        <h1 className=" font-bold text-3xl text-center ">{product?.title}</h1>
                        <p className=" font-medium my-2 text-lg text-justify">
                            {product?.description}
                        </p>

                        <div className=" flex items-center gap-3" >
                            <strong className=" text-lg ">
                                {product?.price.toLocaleString("pt-br", {
                                    style:"currency",
                                    currency:"BRL"
                                })}
                            </strong>
                            <button
                                onClick={()=>handleAddCartItem(product)}
                                className="bg-zinc-900 p-2 rounded hover:scale-110 transition-all hover:bg-zinc-700 cursor-pointer"
                            >
                                <BsCartPlus className="" size={24} color="#ffffff" />
                            </button>
                        </div>
                    </div>
            </section>  
        </div>

)

}