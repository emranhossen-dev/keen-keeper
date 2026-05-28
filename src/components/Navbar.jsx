import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100 shadow-sm flex justify-between">
                <h1 className="text-xl">KeenKeeper</h1>     
                <ul className="flex gap-5">
                    <NavLink to={"/"} className={({isActive}) => (isActive ? "text-red-600" : "")}>Home</NavLink>
                    <NavLink to={"/profile"} className={({isActive}) => (isActive ? "text-red-600" : "")}>Profile</NavLink>
                </ul>       
            </div>
        </div>
    );
};

export default Navbar;