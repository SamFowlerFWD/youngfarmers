import { Badge } from '@/components/ui/badge'

const statusStyles: Record<string, string> = {
  active: 'bg-green-100 text-green-800 border-green-200',
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  expired: 'bg-red-100 text-red-800 border-red-200',
  cancelled: 'bg-gray-100 text-gray-800 border-gray-200',
  suspended: 'bg-orange-100 text-orange-800 border-orange-200',
}

export function MemberStatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={statusStyles[status] || ''}>
      {status}
    </Badge>
  )
}
