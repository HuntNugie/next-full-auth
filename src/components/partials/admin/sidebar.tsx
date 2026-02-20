export const Sidebar = () => {
    return (
        <>
            <aside className="bg-white w-64 flex flex-col shadow-lg transition-transform duration-300" id="sidebar">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">AdminPanel</h1>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a
                        href="#"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                        Users
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                        Orders
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                        Products
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                    >
                        Settings
                    </a>
                    <a
                        href="login.html"
                        className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-red-100 hover:text-red-700"
                    >
                        Logout
                    </a>
                </nav>
            </aside>
        </>
    );
};
