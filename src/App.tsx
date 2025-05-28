
import { createBrowserRouter } from "react-router"
import { Home } from "./pages/home"
import { Cart } from "./pages/cart" 

import { Layout } from "./components/layout"

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        element: <Home/>,
        path: "/"
      },
      {
        element: <Cart/>,
        path: "/cart"
      }
    ]
  }
])

export { router };