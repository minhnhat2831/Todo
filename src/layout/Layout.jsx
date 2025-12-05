import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(){
    return(<>
        <Header />
        <main style={{ minHeight: "84vh" }}>
            <Outlet />
        </main>
        <Footer />
    </>)
}