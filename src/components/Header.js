import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    if(searchInput){
      navigate(`/search?q=${searchInput}`)
    }
    return () => {};
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault()
  } 

  return (
    <header className=" fixed top-0 px-10 w-full h-16 bg-neutral-600 bg-opacity-75 flex z-40">
      <Link to={"/"} className=" w-fit mr-5 pr-2 flex items-center h-full">
        <img src={logo} alt="Logo" width={50} className=" rounded-full" />
      </Link>

      <nav className=" hidden lg:flex w-fit items-center gap-1 ">
        {navigation.map((nav, index) => {
          return (
            <div key={nav.label+"navigation"+index} className="">
              <NavLink
                key={nav.label}
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${
                    isActive && "text-neutral-100"
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          );
        })}
      </nav>

      <div className=" ml-auto flex items-center gap-5">
        <form className=" flex items-center gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Here..."
            className=" bg-transparent outline-none border-none px-4 py-1 hidden lg:block"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button className=" text-2xl text-white">
            <IoSearchOutline />
          </button>
        </form>
        <div className=" w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
          <img src={userIcon} width="w-full h-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
