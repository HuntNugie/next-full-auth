import {AddRegister} from "@/backend/controller/authController";
import {NextApiRequest, NextApiResponse} from "next";

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({status: false, statusCode: 405, error: "method not allowed"});
    }
    return AddRegister(req, res);
}
