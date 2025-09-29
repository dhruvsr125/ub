"use client"

import { Home, ListChecks, Settings, User2 } from "lucide-react"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  pathname === "/dashboard" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  pathname === "/dashboard/profile" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <User2 className="mr-3 h-5 w-5" />
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/tasks"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  pathname === "/dashboard/tasks" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ListChecks className="mr-3 h-5 w-5" />
                Tasks
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  pathname === "/dashboard/settings" ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}
