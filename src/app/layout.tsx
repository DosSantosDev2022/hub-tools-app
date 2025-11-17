import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/global/sidebar/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AdSenseScript } from "@/components/global/google/adSense-script";
import ReactQueryProvider from "@/providers/react-query";

const poppins = Poppins({
  weight: ["200", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hub Tools App",
  description: "O seu Hub de ferramentas web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_PID || '';


  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} dark antialiased scrollbar-custom`}
      >
        <ReactQueryProvider>
          {adSenseId && <AdSenseScript pId={adSenseId} />}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
