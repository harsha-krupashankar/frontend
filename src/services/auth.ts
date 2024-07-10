import { SignInInput, SignUpInput } from "@harsha_rcrm/medium-common-package";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const requestSignIn = async (signInData: SignInInput) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/users/signin`,
            signInData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const requestSignUp = async (signUpData: SignUpInput) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/users/signup`,
            signUpData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};
