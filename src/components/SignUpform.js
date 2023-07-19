import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function SignUpform({ setLogin }) {
    // for navigation inbuilt function 
    const naviagte_varaible = useNavigate();

    //  password visibilty on click
    const [toShowpass, setVisibilitypass] = useState(false);
    const [toShowconformpass, setVisibilityconformpassword] = useState(false);


    // Login User type
    const [usertype, setUser] = useState("student");

    // data that get stored in object
    const [datafeild, setData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        createPassword: "",
        conformPassword: ""
    }
    );

    // when user change the data the data get stored in object
    function changeHandler(event) {
        setData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    // on sign up click just check the primilary conditions
    function submit_signup(event) {
        if (datafeild.firstName == "" || datafeild.lastName == "" || datafeild.emailAddress == "") {
            toast.error("Empty FeildSet");
            return;
        }
        if (datafeild.createPassword != datafeild.conformPassword) {
            toast.error("Password Not Matched");
            return;
        }
        event.preventDefault();
        setLogin(true);

        const user_data = {
            ...datafeild
        }
        console.log(user_data)
        naviagte_varaible("/Dashboard")
        toast.success("Successfully Registered")
    }


    return (
        <div>
            <div className="flex bg-slate-400 p-1 gap-x-1 rounded-full max-w-max mt-1">
                <button
                    onClick={() => {
                        setUser("student")
                    }
                    }
                    className={
                        `${usertype === "student"
                            ? "bg-slate-900 text-slate-300"
                            : "bg-transparent text-slate-900 "
                        } py-2 px-5 rounded-full transition-all
                        }`
                    }

                >Student</button>
                <button
                    onClick={() => {
                        setUser("Instructor")
                    }
                    }

                    className={`${usertype === "Instructor"
                        ? "bg-slate-900 text-slate-300"
                        : "bg-transparent text-slate-900 "
                        } py-2 px-5 rounded-full transition-all`}
                >Instructor</button>
            </div>



            <form onSubmit={submit_signup} className="max-w-screen-md mx-auto">



                <div className="flex flex-col md:flex-row gap-x-4 mt-[20px]">

                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-5 mb-1 leading-[1.375rem]">
                            First Name <sup className="text-pink-400">*</sup></p>

                        <input

                            type="text"
                            placeholder="Enter First Name"
                            name="firstName"
                            onChange={changeHandler}
                            value={datafeild.firstName}
                            className="bg-slate-600 rounded-[0.75rem] w-full p-[12px] text-slate-5"
                        ></input>


                    </label>

                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-5 mb-1 leading-[1.375rem]">
                            Last Name <sup className="text-pink-400">*</sup></p>

                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            name="lastName"
                            onChange={changeHandler}
                            value={datafeild.lastName}
                            className="bg-slate-600 rounded-[0.75rem] w-full p-[12px] text-slate-5"
                        ></input>
                    </label>
                </div>


                <div className="mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-5 mb-1 leading-[1.375rem]">
                            Email Address <sup className="text-pink-400">*</sup></p>

                        <input
                            type="text"
                            placeholder="Enter Email Address"
                            name="emailAddress"
                            onChange={changeHandler}
                            value={datafeild.emailAddress}
                            className="bg-slate-600 rounded-[0.75rem] w-full p-[12px] text-slate-5"
                        ></input>

                    </label>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-5 mb-1 leading-[1.375rem]">
                            Create Password <sup className="text-pink-400">*</sup></p>
                        <div className="relative">
                            <input
                                type={toShowpass ? ("text") : ("password")}
                                placeholder="Enter password"
                                name="createPassword"
                                onChange={changeHandler}
                                value={datafeild.createPassword}
                                className="bg-slate-600 rounded-[0.75rem] w-full p-[12px] text-slate-5"
                            ></input>

                            <div onClick={() => { setVisibilitypass(!toShowpass) }}
                                className="absolute right-3 top-[40%] cursor-pointer"

                            >
                                {
                                    toShowpass ? (<AiOutlineEye></AiOutlineEye>) : (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>)
                                }
                            </div>

                        </div>
                    </label>


                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-5 mb-1 leading-[1.375rem]">
                            Conform Password <sup className="text-pink-400">*</sup></p>
                        <div className="relative">
                            <input
                                type={toShowconformpass ? ("text") : ("password")}
                                placeholder="Conform password"
                                name="conformPassword"
                                onChange={changeHandler}
                                value={datafeild.conformPassword}
                                className="bg-slate-600 rounded-[0.75rem] w-full p-[12px] text-slate-5 "
                            ></input>

                            <div onClick={() => { setVisibilityconformpassword(!toShowconformpass) }}

                                className="absolute right-3 top-[40%] cursor-pointer"
                            >
                                {
                                    toShowconformpass ? (<AiOutlineEye></AiOutlineEye>) : (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>)
                                }
                            </div>
                        </div>

                    </label>
                </div>

                <button className="w-full bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6 active:scale-[98%]">Sign Up </button>

            </form>

        </div>
    )
}

export default SignUpform;