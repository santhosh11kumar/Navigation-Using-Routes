import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Loginform({ setLogin }) {

    const navigatevaraible = useNavigate();
    const [formdata, setformData] = useState({
        email: "", password: ""
    });

    const [Toshow, setVisibility] = useState(false);

    function changeHandler(event) {

        setformData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function visibilityHandler() {
        setVisibility(!Toshow)
    }

    function navigateToDashboard(event) {
        event.preventDefault();
        setLogin(true);
        toast.success("Logged In");
        navigatevaraible("/Dashboard")
    }
    return (
        <div>
            <form onSubmit={navigateToDashboard}
                className="flex flex-col w-full gap-y-4 mt-6  lg:mx-auto">
                <label className="w-full">
                    <p className="text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]">
                        Email Address <sup className="relative text-pink-400">*</sup></p>

                    <input
                        required
                        placeholder="Enter email Address"
                        type="email"
                        value={formdata.email}
                        onChange={changeHandler}
                        name="email"
                        className="bg-slate-600 rounded-[0.5rem] text-slate-300 w-full p-[12px]"
                    ></input>
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]"
                    >Password <sup className="text-pink-400">*</sup></p>

                    <div className="relative">
                        <input
                            required
                            placeholder="Enter Password"
                            type={Toshow ? ("text") : ("password")}
                            value={formdata.password}
                            onChange={changeHandler}
                            name="password"
                            className="bg-slate-600 rounded-[0.5rem] text-slate-300 w-full p-[12px]"
                        >

                        </input>
                        <div onClick={visibilityHandler} className="absolute right-3 top-[40%] cursor-pointer">
                            {
                                Toshow ? (<AiOutlineEye fill="#AFB2BF" ></AiOutlineEye>) : (<AiOutlineEyeInvisible fill="#AFB2BF" ></AiOutlineEyeInvisible>)
                            }
                        </div>
                    </div>
                    <Link to='#'>
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                            forget password
                        </p>
                    </Link>

                </label>

                <button className="rounded-[8px] bg-yellow-500 font-medium text-slate-800 px-[12px] py-[8px] mt-6" >Log in</button>

            </form>
        </div>
    )
}

export default Loginform;