import { Outlet } from "react-router-dom"
import { Header } from "../HomeNavComponents/Header"

export function Layout() {
    return (
        <div>
            <Header/>  
            <Outlet/>  
        </div>
    )
}