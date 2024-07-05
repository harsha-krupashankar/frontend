import Reviews from "@/components/authComponents/Reviews";
import SignUpForm from "@/components/authComponents/SignUpForm";
import * as React from "react";

const Signup = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex justify-center items-center px-20 w-full">
                <SignUpForm />
            </div>
            <div className="flex-1">
                <Reviews />
            </div>
        </div>
    );
};

export default Signup;
