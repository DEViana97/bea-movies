"use client"

import Sidebar from "../../components/sidebar/Sidebar";



export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar/>
        <main>{children}</main>
    </>
  );
}