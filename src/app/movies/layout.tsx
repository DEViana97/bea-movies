"use client"

import HeaderNav from "../../components/sidebar/Sidebar";



export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderNav/>
        <main>{children}</main>
    </>
  );
}