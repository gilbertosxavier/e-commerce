
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import db from "./firebaseConnection";
import { type ProductProps } from "../pages/home";

export const fetchProducts = async (): Promise<ProductProps[]> =>{
    const productsRef =  collection(db, "products");
    const productsSnapshot = await getDocs(productsRef);


    return productsSnapshot.docs.map(doc => {
    const data = doc.data() as Omit<ProductProps, 'id'>;
    return { id: doc.id, ...data };
  });
}

export const fetchProduct = async (id:string) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists() ) {

        const data  = productSnap.data();

        const product: ProductProps = {
            id: productSnap.id,
            title: data.title,
            description: data.description,
            price: data.price,
            cover: data.cover
        };

        return product
    } else {
        throw new Error("Produto não encontrado")
    }
}
