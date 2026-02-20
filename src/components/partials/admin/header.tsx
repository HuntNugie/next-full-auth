export const HeaderAdmin = () => {
    return (
        <>
            <header className="flex items-center justify-between bg-white shadow px-6 py-4">
                <button id="toggleSidebar" className="md:hidden text-gray-600 hover:text-gray-800">
                    ☰
                </button>
                <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
                <div className="flex items-center space-x-4">
                    <span className="hidden md:inline text-gray-700">Admin</span>
                    <img src="https://via.placeholder.com/40" alt="Avatar" className="w-10 h-10 rounded-full" />
                </div>
            </header>
        </>
    );
};
