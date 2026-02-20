import User from "@/backend/models/User";
import {hashPass} from "./brcypt";
// untuk mendapatkan satu data
export const getDetailDataByEmail = async (email: string, relasi: boolean = true) => {
    return await User.findUnique({where: {email}, include: {profile: relasi}});
};

type formData = {
    nama: string;
    email: string;
    usia: number;
    password: string;
};
// untuk menambahkan data
export const AddDataUser = async (data: formData, relasi: boolean = true) => {
    const {nama, email, usia, password} = data;
    return await User.create({
        data: {
            email,
            password: await hashPass(password),
            profile: {
                create: {
                    nama,
                    usia,
                },
            },
        },
        include:{
            profile:relasi
        }
    });
};
