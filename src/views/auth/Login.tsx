import {zodResolver} from "@hookform/resolvers/zod";
import {signIn} from "next-auth/react";
import Link from "next/link";
import {FormEvent} from "react";
import {useForm} from "react-hook-form";
import z from "zod";
const schema = z.object({
    email: z.string().email("email tidak valid"),
    password: z.string().min(8, "minimal password ada 8"),
});
type FormData = z.infer<typeof schema>;
export default function LoginView() {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid, isSubmitting},
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const handleSignIn = async (data: FormData) => {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            callbackUrl: "/dashboard",
        });
    };
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                    Login
                </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Belum punya akun?
                <Link href="/register" className="text-blue-600 hover:underline">
                    Daftar
                </Link>
            </p>
        </>
    );
}
