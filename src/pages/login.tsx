import AuthLayout from "@/components/layouts/auth.layout";
import LoginView from "@/views/auth/Login";
import Head from "next/head";

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
