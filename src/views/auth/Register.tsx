import Link from "next/link";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {fetchRegister} from "@/service/fetching";
import {useRouter} from "next/router";

// buat schema yang benar terlebih dahulu
const schema = z
.object({
    nama: z.string().min(3, "Nama minimal 3 karakter panjang nya"),
    email: z.string().email("email tidak valid"),
    password: z.string().min(8, "password minimal 8 karakter"),
    confirm_password: z.string().min(8, "konfirmasi password minimal 8 karakter"),
    usia: z.number().min(17, "usia minimal 17 tahun untuk daftar admin").max(120, "usia tidak masuk akal"),
})
.refine((data) => data.password === data.confirm_password, {
    message: "Password dan konfirmasi password tidak sama",
    path: ["confirm_password"],
});

export type FormData = z.infer<typeof schema>;

export default function RegisterView() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const {push} = useRouter();

    const submitHandle = async (data: FormData) => {
        const request = await fetchRegister(data);
        if (request.ok) {
            const response = await request.json();
            push("/login");
        }else{
            reset();
        }
    };
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
            <form onSubmit={handleSubmit(submitHandle)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="name"
                        required={true}
                        {...register("nama")}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    {errors.nama && <p className="text-red-600">{errors.nama.message}</p>}
                </div>
                <div>
                    <label htmlFor="usia" className="block text-gray-700 mb-1">
                        Usia
                    </label>
                    <input
                        type="number"
                        id="usia"
                        required={true}
                        {...register("usia", {valueAsNumber: true})}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    {errors.usia && <p className="text-red-600">{errors.usia.message}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                </div>
                <div>
                    <label htmlFor="confirm_password" className="block text-gray-700 mb-1">
                        konfirmasi Password
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        {...register("confirm_password")}
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    {errors.confirm_password && <p className="text-red-600">{errors.confirm_password.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    disabled={!isValid || isSubmitting}
                >
                    Register
                </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Sudah punya akun?
                <Link href="/login" className="text-green-600 hover:underline">
                    Login
                </Link>
            </p>
        </>
    );
}
