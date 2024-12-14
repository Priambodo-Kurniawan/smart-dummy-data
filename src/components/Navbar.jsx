import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink className="btn btn-ghost text-xl" to="/">
                    Codebeast
                </NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <NavLink to="/dummy-data">Dummy Data</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialog">Dialog</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
