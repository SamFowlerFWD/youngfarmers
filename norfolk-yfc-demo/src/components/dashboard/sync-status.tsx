'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  CloudOff,
  Loader2,
} from 'lucide-react'

interface SyncStatusProps {
  isConfigured: boolean
  totalMembers: number
  syncedCount: number
  errorCount: number
  conflictCount: number
  pendingCount: number
  lastSyncTime?: string
}

export function SyncStatus({
  isConfigured,
  totalMembers,
  syncedCount,
  errorCount,
  conflictCount,
  pendingCount,
  lastSyncTime,
}: SyncStatusProps) {
  const [syncing, setSyncing] = useState(false)
  const [syncResult, setSyncResult] = useState<string | null>(null)

  const handleManualSync = async (direction: 'outbound' | 'inbound') => {
    setSyncing(true)
    setSyncResult(null)

    try {
      const res = await fetch(`/api/sync/delta?direction=${direction}`, {
        method: 'POST',
        credentials: 'include',
      })

      const data = await res.json()
      if (data.success) {
        setSyncResult(
          direction === 'outbound'
            ? `Pushed ${data.synced}/${data.total} members to SharePoint`
            : `Processed ${data.updated}/${data.total} changes from SharePoint`
        )
      } else {
        setSyncResult(`Sync failed: ${data.error}`)
      }
    } catch {
      setSyncResult('Sync request failed')
    }

    setSyncing(false)
  }

  if (!isConfigured) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CloudOff className="h-4 w-4 text-gray-400" />
            SharePoint Sync
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4">
            <CloudOff className="h-8 w-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Not configured</p>
            <p className="text-xs text-gray-400 mt-1">
              Set Azure AD and SharePoint environment variables to enable bi-directional sync.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          SharePoint Sync
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status overview */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>{syncedCount} synced</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span>{pendingCount} pending</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="h-4 w-4 text-red-500" />
            <span>{errorCount} errors</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-orange-500" />
            <span>{conflictCount} conflicts</span>
          </div>
        </div>

        {lastSyncTime && (
          <p className="text-xs text-gray-400">
            Last sync: {new Date(lastSyncTime).toLocaleString('en-GB')}
          </p>
        )}

        {/* Sync actions */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleManualSync('outbound')}
            disabled={syncing}
          >
            {syncing ? (
              <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
            ) : (
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
            )}
            Push to SharePoint
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleManualSync('inbound')}
            disabled={syncing}
          >
            {syncing ? (
              <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
            ) : (
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
            )}
            Pull from SharePoint
          </Button>
        </div>

        {syncResult && (
          <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">{syncResult}</p>
        )}
      </CardContent>
    </Card>
  )
}
