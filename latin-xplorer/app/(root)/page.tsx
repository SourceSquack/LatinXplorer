import { UserButton } from "@clerk/nextjs";
import LandingPage from "@/components/ui/landing";
const SetupPage = () => {
  return (
    <div className="p-4">
      <>
      <UserButton afterSignOutUrl=""/>
      </>
      <LandingPage />
    </div>
  );
}

export default SetupPage;