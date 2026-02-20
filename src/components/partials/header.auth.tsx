import { useRouter } from "next/router";

export const HeaderAuth = ({title,sub}:{title:string,sub:string}) => {
    const {pathname} = useRouter();
    return (
        <>
            <div className={`hidden md:block md:w-1/2 ${pathname == "/register" ? "bg-green-600" : "bg-blue-600"} text-white p-12 flex flex-col justify-center`}>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-blue-200">{sub}</p>
            </div>
        </>
    );
};
