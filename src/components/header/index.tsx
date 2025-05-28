import { Link } from "react-router"
import { FiShoppingCart } from "react-icons/fi"

export function Header () {
    return(
        <header className="w-full px-1 bg-slate-200">
            <nav className="w-full h-14 max-w-7xl flex items-center justify-between px-5 mx-auto" >
                <Link to="/"  className="font-black text-2xl" > VendAqui!</Link>
                <Link to="/cart" className="relative" > <FiShoppingCart size={24} color="#121212" /> <span className=" absolute -right-3 -top-3 px-2.5 bg-sky-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs" >2</span> </Link>
            </nav>
        </header>
    )
}