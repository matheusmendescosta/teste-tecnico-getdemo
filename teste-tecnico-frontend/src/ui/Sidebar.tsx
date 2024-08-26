"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

type SidebarMenu = {
  children: React.ReactNode;
};

export default function SidebarMenu({ children }: SidebarMenu) {
  return (
    <div className="flex h-screen">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard/demos" icon={HiChartPie}>
              Demos
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/demos" icon={HiViewBoards}>
              Frames
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard/demos" icon={HiUser}>
              User
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
