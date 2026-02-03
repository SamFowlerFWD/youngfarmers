'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MemberStatusBadge } from './member-status-badge'
import { Search, ChevronUp, ChevronDown, Eye } from 'lucide-react'

interface Member {
  id: string | number
  fullName: string
  firstName: string
  lastName: string
  membershipNumber?: string
  membershipStatus: string
  membershipType: string
  dateOfBirth: string
  parentName: string
  parentEmail: string
  club?: { id: string | number; name: string } | null
  createdAt: string
}

interface MembersTableProps {
  members: Member[]
  showClubColumn?: boolean
}

type SortKey = 'fullName' | 'membershipStatus' | 'membershipType' | 'createdAt'
type SortDir = 'asc' | 'desc'

export function MembersTable({ members, showClubColumn = false }: MembersTableProps) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [sortKey, setSortKey] = useState<SortKey>('createdAt')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const filtered = useMemo(() => {
    let result = [...members]

    // Search
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (m) =>
          m.fullName.toLowerCase().includes(q) ||
          m.parentName?.toLowerCase().includes(q) ||
          m.parentEmail?.toLowerCase().includes(q) ||
          m.membershipNumber?.toLowerCase().includes(q)
      )
    }

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter((m) => m.membershipStatus === statusFilter)
    }

    // Type filter
    if (typeFilter !== 'all') {
      result = result.filter((m) => m.membershipType === typeFilter)
    }

    // Sort
    result.sort((a, b) => {
      let valA = a[sortKey] || ''
      let valB = b[sortKey] || ''
      if (typeof valA === 'string') valA = valA.toLowerCase()
      if (typeof valB === 'string') valB = valB.toLowerCase()
      if (valA < valB) return sortDir === 'asc' ? -1 : 1
      if (valA > valB) return sortDir === 'asc' ? 1 : -1
      return 0
    })

    return result
  }, [members, search, statusFilter, typeFilter, sortKey, sortDir])

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <ChevronUp className="h-3 w-3 opacity-30" />
    return sortDir === 'asc' ? (
      <ChevronUp className="h-3 w-3" />
    ) : (
      <ChevronDown className="h-3 w-3" />
    )
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name, email, or membership number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="expired">Expired</option>
          <option value="cancelled">Cancelled</option>
          <option value="suspended">Suspended</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="all">All Types</option>
          <option value="senior">Senior</option>
          <option value="countrysider">Countrysider</option>
          <option value="associate">Associate</option>
          <option value="honorary">Honorary</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        Showing {filtered.length} of {members.length} members
      </p>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50/80">
              <th className="text-left p-3 font-medium">
                <button
                  onClick={() => toggleSort('fullName')}
                  className="flex items-center gap-1 hover:text-gray-900"
                >
                  Name <SortIcon column="fullName" />
                </button>
              </th>
              {showClubColumn && (
                <th className="text-left p-3 font-medium hidden md:table-cell">Club</th>
              )}
              <th className="text-left p-3 font-medium">
                <button
                  onClick={() => toggleSort('membershipType')}
                  className="flex items-center gap-1 hover:text-gray-900"
                >
                  Type <SortIcon column="membershipType" />
                </button>
              </th>
              <th className="text-left p-3 font-medium">
                <button
                  onClick={() => toggleSort('membershipStatus')}
                  className="flex items-center gap-1 hover:text-gray-900"
                >
                  Status <SortIcon column="membershipStatus" />
                </button>
              </th>
              <th className="text-left p-3 font-medium hidden lg:table-cell">Parent</th>
              <th className="text-left p-3 font-medium hidden lg:table-cell">
                <button
                  onClick={() => toggleSort('createdAt')}
                  className="flex items-center gap-1 hover:text-gray-900"
                >
                  Joined <SortIcon column="createdAt" />
                </button>
              </th>
              <th className="p-3 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={showClubColumn ? 7 : 6}
                  className="p-8 text-center text-gray-500"
                >
                  No members found
                </td>
              </tr>
            ) : (
              filtered.map((member) => (
                <tr key={member.id} className="border-b last:border-0 hover:bg-gray-50/50">
                  <td className="p-3">
                    <div>
                      <div className="font-medium">{member.fullName}</div>
                      <div className="text-xs text-gray-400 font-mono">
                        {member.membershipNumber || '—'}
                      </div>
                    </div>
                  </td>
                  {showClubColumn && (
                    <td className="p-3 hidden md:table-cell">
                      <span className="text-gray-700">{member.club?.name || '—'}</span>
                    </td>
                  )}
                  <td className="p-3">
                    <Badge variant="outline" className="capitalize text-xs">
                      {member.membershipType}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <MemberStatusBadge status={member.membershipStatus} />
                  </td>
                  <td className="p-3 hidden lg:table-cell">
                    <div className="text-gray-700">{member.parentName}</div>
                    <div className="text-xs text-gray-400">{member.parentEmail}</div>
                  </td>
                  <td className="p-3 hidden lg:table-cell text-gray-500">
                    {new Date(member.createdAt).toLocaleDateString('en-GB')}
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/dashboard/members/${member.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
