import bcrypt from "bcryptjs";

const salt = 10;
export const comparePass = async (hashPass: string, password: string) => {
    return await bcrypt.compare(password, hashPass);
};

export const hashPass = async (password: string) => {
    return await bcrypt.hash(password, salt);
};
