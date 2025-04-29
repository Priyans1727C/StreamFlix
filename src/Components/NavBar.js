import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'



const Navbar = () => {

    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
    const [searchInput, setSearchInput] = useState(removeSpace)
    const navigate = useNavigate()


    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`)
        }
    }, [searchInput, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <nav className="  flex justify-center items-center  bg-transparent  rounded-2xl ">
            <div className=" fixed top-2  p-3 z-50 flex justify-between items-center  mx-auto bg-[#232136]/40 rounded-full">

                {/* Brand Name */}
                <Link to={"/"}>
                    <div className="text-white text-xl font-semibold px-4">
                        StreamFlix
                    </div>
                </Link>


                <div className="flex items-center justify-between gap-7 px-4 py-2  text-white  ">
                    <Link to={"/"}><div>Home</div></Link>
                    <Link to={"/movie"}><div>Movies</div></Link>
                    <Link to={"/tv"}><div>TV</div></Link>


                </div>

                {/* Search Input */}
                <div className="flex items-center gap-4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center bg-[#1a1927]/20 px-4 py-2 rounded-full text-white border border-gray-600">
                            <FaSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent outline-none text-gray-300 placeholder-gray-500"
                                onChange={(e) => setSearchInput(e.target.value)}
                                value={searchInput}
                            />
                        </div>
                    </form>

                    {/* Profile Image */}
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-400">
                        <img
                            src={userIcon}
                            alt="Profile"
                        />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
