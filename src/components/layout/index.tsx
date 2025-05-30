import { Outlet } from "react-router";
import { Header } from "../header";
import ScrollToTop from "../scroll";

export function Layout() {
    return (
        <>
        <Header/>
        <ScrollToTop/>
        <Outlet/>
        </>
    )
}