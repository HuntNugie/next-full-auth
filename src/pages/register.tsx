import AuthLayout from "@/components/layouts/auth.layout";
import RegisterView from "@/views/auth/Register";
import Head from "next/head";

export default function RegisterPage() {
    return (
        <>
        <Head>
            <title>Register Admin baru</title>
        </Head>
            <AuthLayout
                title="Bergabung Sekarang!"
                sub="Buat akun Anda untuk mendapatkan akses penuh ke dashboard profesional."
            >
                <RegisterView />
            </AuthLayout>
        </>
    );
}
