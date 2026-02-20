import { FormData } from "@/views/auth/Register";
export const fetchRegister = async (data: FormData) => {
    console.log(data)
    return await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};
