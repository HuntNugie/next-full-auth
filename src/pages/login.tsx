import AuthLayout from "@/components/layouts/auth.layout";
import LoginView from "@/views/auth/Login";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]";

export default function LoginPage() {
    return (
        <>
        <Head>
            <title>Login admin</title>
        </Head>
            <AuthLayout
                title="Selamat Datang Kembali!"
                sub="Masuk untuk mengelola dashboard Anda dengan mudah dan efisien."
            >
                <LoginView />
            </AuthLayout>
        </>
    );
}


export async function getServerSideProps(context:GetServerSidePropsContext){
    const session = await getServerSession(context.req,context.res,authOptions);
    if(session){
        return {redirect:{
            destination:"/dashboard",
            permanent:false
        }}
    }
    return {
        props:{}
    }
}