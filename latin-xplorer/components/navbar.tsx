import { MainNav } from "@/components/main-nav";
import { UserButton } from "@clerk/nextjs";



const Navbar = async () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    <MainNav className="mx-6" />
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;