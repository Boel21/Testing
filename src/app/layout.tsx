import "@/styles/globals.css";
import "@/styles/customSidebar.css";

import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

// Custom global components
// import Topbar from "@/global/Topbar";
// import Sidebar from "@/global/Sidebar";
// import Provider from "@/global/Provider";
const DynamicTopBar = dynamic(() => import("@/global/Topbar"), { ssr: false });
const DynamicSidebar = dynamic(() => import("@/global/Sidebar"), {
  ssr: false,
});
const DynamicProvider = dynamic(() => import("@/global/Provider"), {
  ssr: false,
});
interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Marketin Arm",
  description: "Software",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <DynamicProvider>
          <div id="root">
            <div className="app">
              <DynamicSidebar />
              <main className="content">
                <DynamicTopBar />
                {children}
              </main>
            </div>
          </div>
        </DynamicProvider>
      </body>
    </html>
  );
};

export default RootLayout;
