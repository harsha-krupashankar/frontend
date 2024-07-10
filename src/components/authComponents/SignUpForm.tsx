import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpInput } from "@harsha_rcrm/medium-common-package";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestSignUp } from "@/services/auth";
import { toast } from "../ui/use-toast";

const SignUpForm = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(signUpInput),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signUpInput>) => {
        const response = await requestSignUp(values);
        if (response?.status == 200) {
            navigate("/blogs");
        } else {
            toast({
                title: "Something went wrong",
                description: "Please try again later",
                variant: "destructive",
            });
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-3/5"
            >
                <div className="text-center">
                    <h3 className="text-4xl font-bold mb-2">
                        Create an account
                    </h3>
                    <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/signin" className="underline">
                            Sign in
                        </Link>
                    </p>
                </div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    type="name"
                                    placeholder="Enter your name"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default SignUpForm;
