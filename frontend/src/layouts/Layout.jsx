import { Outlet } from "react-router" 
import Header from "./Header"
import Footer from "./Footer"
// import ArrowUp from "../components/ArrowUp"

export default function Layout () {
    return (
        <div className="layout-grid">
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <ArrowUp /> */}
            <Footer />
        </div>
    )
}