export default function RootPage() {
    return null;
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/api/auth/signin",
            permanent: false,
        },
    };
}
