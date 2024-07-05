import SignInForm from "@/components/authComponents/SignInForm";
import Reviews from "../components/authComponents/Reviews";
import * as React from "react";

const Signin = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex justify-center items-center px-20 w-full">
                <SignInForm />
            </div>
            <div className="flex-1">
                <Reviews />
            </div>
        </div>
    );
};

export default Signin;
