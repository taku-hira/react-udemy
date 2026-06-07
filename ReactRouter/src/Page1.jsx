import { Link, Outlet } from "react-router-dom"

export const Page1 = () => {
    return (
        <div>
            <h1>1</h1>
            <Link to="detail">Detail1</Link>
            <Link to="detail2">Detail2</Link>
            <Outlet />
        </div>
    )
}