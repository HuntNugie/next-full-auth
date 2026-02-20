import Link from "next/link";

export default function LoginView() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
            <form action="#" method="POST" className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
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
