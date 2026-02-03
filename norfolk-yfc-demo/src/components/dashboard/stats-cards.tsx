import { Card, CardContent } from '@/components/ui/card'
import { Users, UserCheck, UserX, Clock } from 'lucide-react'

interface StatsCardsProps {
  totalMembers: number
  activeMembers: number
  pendingMembers: number
  expiredMembers: number
}

export function StatsCards({ totalMembers, activeMembers, pendingMembers, expiredMembers }: StatsCardsProps) {
  const stats = [
    {
      label: 'Total Members',
      value: totalMembers,
      icon: Users,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      label: 'Active',
      value: activeMembers,
      icon: UserCheck,
      color: 'text-green-600 bg-green-50',
    },
    {
      label: 'Pending',
      value: pendingMembers,
      icon: Clock,
      color: 'text-yellow-600 bg-yellow-50',
    },
    {
      label: 'Expired',
      value: expiredMembers,
      icon: UserX,
      color: 'text-red-600 bg-red-50',
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
