import React from "react";

const Reviews = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-100">
            <div className="px-20">
                <h4 className="font-semibold text-4xl mb-6">
                    "The customer service i received was exceptional. The
                    support team went above and beyond to address my concerns."
                </h4>
                <div className="">
                    <p className="font-bold text-lg">Jules Winnfield</p>
                    <p className="text-gray-500 text-lg">CEO, Acme Inc</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
