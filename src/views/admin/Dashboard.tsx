export default function DashboardView() {
    return (
        <>
            {/* Statistik cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500">Users</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500">Orders</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">567</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500">Revenue</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">Rp 12,345,000</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-gray-500">Products</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">89</p>
                </div>
            </div>
            {/* Table */}
            <div className="bg-white p-6 rounded-lg shadow overflow-x-auto mb-6">
                <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b p-2 text-gray-600">ID</th>
                            <th className="border-b p-2 text-gray-600">Name</th>
                            <th className="border-b p-2 text-gray-600">Email</th>
                            <th className="border-b p-2 text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="p-2 border-b">1</td>
                            <td className="p-2 border-b">Nugie</td>
                            <td className="p-2 border-b">nugie@example.com</td>
                            <td className="p-2 border-b text-green-500 font-semibold">Active</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="p-2 border-b">2</td>
                            <td className="p-2 border-b">Budi</td>
                            <td className="p-2 border-b">budi@example.com</td>
                            <td className="p-2 border-b text-red-500 font-semibold">Inactive</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Dummy Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Revenue Chart</h3>
                <div className="h-64 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
            </div>
        </>
    );
}
