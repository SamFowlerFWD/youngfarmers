import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  LogOut,
  LayoutDashboard,
  Users,
  Building2,
  Settings,
} from 'lucide-react'

interface DashboardShellProps {
  children: React.ReactNode
  user: {
    name?: string
    email: string
    role: string
    club?: { id: string | number; name: string } | null
  }
  title: string
  description?: string
}

export function DashboardShell({ children, user, title, description }: DashboardShellProps) {
  const isAdmin = user.role === 'admin' || user.role === 'county-officer'
  const isLeader = user.role === 'club-leader'
  const clubName = typeof user.club === 'object' && user.club ? user.club.name : null

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <Link href="/" className="font-bold text-primary text-lg">
                Norfolk YFC
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                {isAdmin && (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/admin">
                        <LayoutDashboard className="h-4 w-4 mr-1.5" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/admin">
                        <Settings className="h-4 w-4 mr-1.5" />
                        CMS Admin
                      </Link>
                    </Button>
                  </>
                )}
                {isLeader && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/leader">
                      <LayoutDashboard className="h-4 w-4 mr-1.5" />
                      Dashboard
                    </Link>
                  </Button>
                )}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">{user.name || user.email}</div>
                <div className="text-xs text-gray-500 capitalize">
                  {user.role.replace('-', ' ')}
                  {clubName ? ` - ${clubName}` : ''}
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/api/users/logout">
                  <LogOut className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {description && <p className="text-gray-500 mt-1">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
