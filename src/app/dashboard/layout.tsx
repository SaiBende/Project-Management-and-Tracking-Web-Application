import SideBar from "@/components/SideBar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>
    <section className="flex flex-row">
      <SideBar/>
      {children}
    </section>
    
    </>
  }