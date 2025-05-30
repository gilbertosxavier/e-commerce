
import { useContext } from "react"
import { Link } from "react-router"
import { FiShoppingCart } from "react-icons/fi"

import { CartContext } from "../../contexts/CartContext"

export function Header () {
    const  { cartAmount }  = useContext(CartContext)

    return(
        <header className="w-full px-1 bg-[#82bddd] fixed top-0">
            <nav className="w-full h-18 max-w-7xl flex items-center justify-between px-5 mx-auto" >
                <Link to="/"  className="font-bold text-3xl " > DevCommerce</Link>
                <Link to="/cart" className="relative" > 
                    <FiShoppingCart size={24} color="#000000"/>
                    { cartAmount > 0 && (
                    <span className=" absolute -right-3 -top-3 px-2.5 bg-sky-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs" >
                        {cartAmount}
                    </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}