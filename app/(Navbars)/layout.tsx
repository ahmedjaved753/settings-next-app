import Link from "next/link";
import MainNav from "@/components/MainNav";
import UserAccountNav from "@/components/UserAccountNav";
import navbarConfig from "@/lib/navbarConfig";
import Sidebar from "@/components/Sidebar";
import Level1Heading from "@/components/Level1Heading";

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
        <div className="container grid flex-1 gap-12 grid-cols-[200px_1fr]">
          <aside className="flex flex-col w-[200px]">
            <Level1Heading text="Settings" className="mb-5" />
            <Sidebar items={navbarConfig.sidebarNav} />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
      {children}
    </>
  );
}
