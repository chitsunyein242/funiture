import { Outlet } from "react-router-dom"
import Header from "@/components/layouts/Header"

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </div>
    )
}

export default RootLayout
