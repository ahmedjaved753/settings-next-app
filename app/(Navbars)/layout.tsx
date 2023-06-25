import Link from "next/link";
import MainNav from "@/components/MainNav";
import UserAccountNav from "@/components/UserAccountNav";
import navbarConfig from "@/lib/navbarConfig";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col space-y-6">
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container grid grid-cols-3 h-16 items-center py-4">
            <div className="col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-medium font-bold">WeBee</span>
              </Link>
            </div>
            <div className="col-span-1 flex justify-center">
              <MainNav items={navbarConfig.topNav} />
            </div>
            <div className="col-span-1 flex justify-end">
              <UserAccountNav items={navbarConfig.userAccountNav} />
            </div>
          </div>
        </header>
      </div>
      {children}
    </>
  );
}
