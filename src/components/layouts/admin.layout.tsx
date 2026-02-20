import { HeaderAdmin } from "../partials/admin/header";
import { Sidebar } from "../partials/admin/sidebar";

export default function AdminLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
               <Sidebar/>
                {/* Main content */}
                <main className="flex-1 flex flex-col">
                    {/* Topbar */}
                  <HeaderAdmin/>
                    {/* Content */}
                    <div className="p-6 flex-1 overflow-y-auto">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
