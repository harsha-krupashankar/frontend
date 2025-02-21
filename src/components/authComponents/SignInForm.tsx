import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInInput } from "@harsha_rcrm/medium-common-package";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { requestSignIn } from "@/services/auth";
import { toast } from "../ui/use-toast";

const SignInForm = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(signInInput),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signInInput>) => {
        const response = await requestSignIn(values);
        if (response?.status == 200) {
            navigate("/blogs");
        } else {
            toast({
                title: "Something went wrong",
                description: "Please try again later",
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
                        Sign in to your account
                    </h3>
                    <p className="text-muted-foreground">
                        Do not have an account?{" "}
                        <Link to="/signup" className="underline">
                            Sign up
                        </Link>
                    </p>
                </div>

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

                <Button
                    type="submit"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </Form>
    );
};

export default SignInForm;
