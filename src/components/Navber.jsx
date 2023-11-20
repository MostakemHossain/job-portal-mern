import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/images/logo.jpg";

const navItems = [
    { path: "/", title: "Start a Job" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a Job" },
]


const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <nav className="flex py-6 justify-between items-center">
                <div>
                    <Link to="/" ><div className="flex items-center ">
                        <img className="w-16 h-16 gap-0" src={logo} alt="" />
                        <h1 className="text-black text-3xl font-bold">JobPortal</h1>
                    </div></Link>
                </div>

                {/* nav items for large devices  */}
                <ul className="hidden md:flex gap-12">
                    {
                        navItems.map(({ path, title }) => (
                            <li className="text-base text-primary" key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "active" : ""
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* sign up and log in button */}
                <div className="text-base text-primary font-medium space-x-5 hidden  lg:block">
                    <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
                    <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue-500 text-white">Sign up</Link>

                </div>

                {/* mobile menu */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen?<FaXmark className="w-6 h-6 text-primary"/> :<FaBarsStaggered className="w-6 h-6 text-primary"/>
                        }
                    </button>
                </div>

            </nav>

            {/* nav items for  mobile  */}
            <div className={`px-4 bg-black text-white py-5 rounded-sm ${isMenuOpen?"":"hidden"}`}>
                <ul>
                {
                        navItems.map(({ path, title }) => (
                            <li className="text-base text-white first:text-white py-1" key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "active" : ""
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }


                </ul>
                <li>
                <Link to="/login">Log in</Link>
                </li>

            </div>
        </header>
    )
}

export default Navber