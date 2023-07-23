import Navbar from "@/components/navbar"

export default async function HomeLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: any
}) {
    return (
        <>
         <Navbar />
        </>
    )
}