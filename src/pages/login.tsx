import AuthLayout from "@/components/layouts/auth.layout";
import LoginView from "@/views/auth/Login";

export default function LoginPage() {
    return (
        <>
            <AuthLayout
                title="Selamat Datang Kembali!"
                sub="Masuk untuk mengelola dashboard Anda dengan mudah dan efisien."
            >
                <LoginView />
            </AuthLayout>
        </>
    );
}
