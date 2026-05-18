import { cookies } from "next/headers"
import { SidebarProvider, SidebarInset, SidebarTrigger, AppSidebar } from "@/components/ui/sidebar"
export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/80 px-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <span className="text-lg font-bold tracking-tight text-white group-data-[collapsible=icon]:hidden">
            Retrievabase
          </span>
          </div>
          <div className="flex items-center gap-3">
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
