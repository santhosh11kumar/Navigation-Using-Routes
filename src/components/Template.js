import Pattern from "../assets/frame.png";
import Loginform from "./Loginform";
import SignUpform from "./SignUpform";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formType, setLogin }) {
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
            {/* Left section */}
            <div className="w-11/12 max-w-[450px] mx-0 text-white">

                <p className="text-slate-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</p>

                <div className="text-[1.125rem] mt-4 leading-[1.625rem]">
                    <p className="text-slate-100">{desc1}</p>

                    <p className="italic text-blue-400">{desc2}</p>

                </div>

                {
                    formType === "login" ? <Loginform setLogin={setLogin}></Loginform> : <SignUpform setLogin={setLogin}></SignUpform>
                }



                <div className="flex w-full items-center my-4 gap-x-2">
                    <span className="h-[1px] w-full bg-slate-500"></span>
                    <span className="text-slate-500 font-medium leading-[1.375rem]">OR</span>
                    <span className="h-[1px] w-full bg-slate-500"></span>
                </div>

                <button className="w-full bg-slate-600 flex items-center justify-center rounded-[8px] font-medium text-slate-100 border-slate-600 border px-[12px] py-[8px] gap-x-2 mt-6 active:scale-[98%]">
                    <FcGoogle />
                    Sign up with Google</button>
            </div>


            {/* Right section */}
            <div className="relative w-11/12 max-w-[450px]">
                <img src={Pattern} width={558} height={504} loading="lazy"></img>
                <img src={image} width={558} height={504} loading="lazy" className="absolute -top-4 right-4 "></img>
            </div>
        </div>
    )
}
export default Template;