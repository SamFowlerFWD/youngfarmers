import { getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getAuthUser() {
  const payload = await getPayload({ config })
  const headersList = await headers()

  try {
    const result = await payload.auth({ headers: headersList })
    return result.user
  } catch {
    return null
  }
}

export async function requireAuth(allowedRoles?: string[]) {
  const user = await getAuthUser()

  if (!user) {
    redirect('/login')
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    if (user.role === 'parent') redirect('/dashboard/parent')
    if (user.role === 'club-leader') redirect('/dashboard/leader')
    if (user.role === 'admin' || user.role === 'county-officer') redirect('/dashboard/admin')
    redirect('/login')
  }

  return user
}
