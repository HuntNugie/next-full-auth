import { HeaderAuth } from "../partials/header.auth";

export default function AuthLayout({children,title,sub}:{children:React.ReactNode,title:string,sub:string}) {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
                    {/* Banner sebelah kiri */}
                   <HeaderAuth title={title} sub={sub}/>
                    {/* Form login */}
                    <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
                       {children}
                    </div>
                </div>
            </div>
        </>
    );
}
