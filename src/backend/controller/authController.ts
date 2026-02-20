import {NextApiRequest, NextApiResponse} from "next";
import {AddDataUser, getDetailDataByEmail} from "@/service/User";
export const AddRegister = async (req: NextApiRequest, res: NextApiResponse) => {
    const {nama, email, usia, password, confirm_password} = req.body;
    if (password !== confirm_password) {
        return res
        .status(400)
        .json({status: false, statusCode: 400, error: "password dan konfimrasi password tidak sama"});
    }
    const user = await getDetailDataByEmail(email);
    if (user) {
        return res
        .status(400)
        .json({status: false, statusCode: 400, error: "email yang anda gunakan sudah terpakai oleh pengguna lain"});
    }

    // tinggal tambah
    try {
        await AddDataUser({nama, email, usia, password});
        return res.status(200).json({status: true, statusCode: 200, message: "berhasil menambahkan data user"});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({status: false, statusCode: 400, error: error.message});
        } else {
            return res.status(400).json({
                error: "error tak di kenal",
            });
        }
    }
};
