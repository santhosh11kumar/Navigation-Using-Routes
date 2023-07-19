import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from 'react-hot-toast';
import '../'

function Navbar({ isLogin, setLogin }) {

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-slate-100 ">
            <div>
                <Link to="/" > <img src={logo} loading="lazy" width={160} height={32}></img> </Link>
            </div>
            <div className="flex gap-x-6 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </div>


            <div className="flex items-center gap-x-4 ">
                {!isLogin &&
                    <NavLink to="/Login" >
                        <button className="text-slate-900 bg-slate-400 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Login
                        </button></NavLink>
                }
                {!isLogin &&
                    <NavLink to="/Signnup" >
                        <button className="text-slate-900 bg-slate-400 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Sign up
                        </button></NavLink>
                }
                {isLogin &&
                    <NavLink to="/"
                        onClick={() => {
                            setLogin(false);
                            toast.success("Logged Out")
                        }}
                    >
                        <button className="text-slate-900 bg-slate-400 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Log Out</button>
                    </NavLink>
                }
                {isLogin &&
                    <NavLink to="/Dashboard">
                        <button className="text-slate-900 bg-slate-400 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            Dashboard
                        </button>
                    </NavLink>
                }
            </div>
        </div >
    )
}
export default Navbar;