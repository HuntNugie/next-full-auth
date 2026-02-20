import AdminLayout from "@/components/layouts/admin.layout";
import DashboardView from "@/views/admin/Dashboard";
import {GetServerSidePropsContext} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]";

export default function DashboardPage() {
    return (
        <>
            <AdminLayout>
                <DashboardView />
            </AdminLayout>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    return {
        props: {
            user: session.user,
        },
    };
}
