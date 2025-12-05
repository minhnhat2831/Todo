import { useState } from "react"
import { NavLink, useLocation } from "react-router";

export default function Ahref({ children, to }) {
    const [open, setOpen] = useState(false)
    const location = useLocation();

    //Lấy đường link 
    const isActive = location.pathname === to;
                    //link hiện tại    ||  link đc dẫn tới

    return (<>
        <div
            className="group relative h-fit w-fit"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <NavLink to={to} className="relative text-black">
                {children}
                <span
                    style={{
                        transform: (open || isActive) ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-800 transition-transform duration-300 ease-out"
                ></span>
            </NavLink>

        </div>
    </>)
}