import { NavLink, Outlet } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react";
import { sidebarItems } from "./sidebar.data";
import Button from "@/components/ui/Button";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F5F7FB]">
      {/* Sidebar */}
      <aside className="hidden h-screen w-[260px] flex-col overflow-y-auto bg-[#071437] text-white lg:flex">
        {/* Logo */}
        <div className="border-b border-white/10 px-8 py-7">
          <h1 className="text-4xl font-bold tracking-tight">
            CRM
            <span className="text-blue-500">SaaS</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-2xl px-5 py-4 text-[15px] font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={22} />

                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t border-white/10 p-5">
          <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
              PK
            </div>

            <div>
              <p className="font-semibold">Pranjal</p>

              <p className="text-sm text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      {/* Main Section */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top Navbar */}
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5">
          {/* Search */}
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="rounded-xl border border-slate-400 p-3 hover:bg-slate-50"
            >
              <Menu size={20} />
            </Button>

            <div className="flex h-10 w-[420px] items-center rounded-2xl border border-slate-400 bg-slate-50 px-5">
              <Search size={18} className="mr-3 text-slate-400" />

              <input
                type="text"
                placeholder="Search leads, deals, contacts..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Button
              variant="secondary"
              className="relative border-none rounded-full p-2 transition hover:bg-slate-100"
            >
              <Bell size={23} className="text-slate-600" />

              <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </Button>

            <div className="flex items-center gap-2  border border-slate-400 bg-slate-50 rounded-full h-100% w-100% p-1 ">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500  font-bold text-white">
                PK
              </div>
              {/* <div className="flex-col"> */}
              {/* <span className="text-slate-900 p-0">Pranjal</span> */}
              {/* <span className="text-slate-500 text-sm">Admin</span> */}
              {/* </div> */}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-w-0 flex-1 overflow-y-auto bg-[#F5F7FB]">
          <div className="mx-auto w-full max-w-[1600px] p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
