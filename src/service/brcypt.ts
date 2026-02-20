import bcrypt from "bcryptjs";

export const comparePass = async (hashPass:string, password:string ) => {
    return await bcrypt.compare(password, hashPass);
};
