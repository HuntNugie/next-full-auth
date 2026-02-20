import Link from "next/link";

export default function RegisterView() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
            <form action="#" method="POST" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="usia" className="block text-gray-700 mb-1">
                        Usia 
                    </label>
                    <input
                        type="number"
                        id="usia"
                        name="usia"
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="block text-gray-700 mb-1">
                        konfirmasi Password
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        required={true}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
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
