// components/ui/UserButton.tsx
'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { LogOut, User as UserIcon } from 'lucide-react'
import { Skeleton } from './skeleton'

export const UserButton = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <Skeleton className="h-8 w-8 rounded-full" />
  }

  if (!session) {
    return (
      <a
        href="/login"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-3 border border-input hover:bg-accent hover:text-accent-foreground"
      >
        Sign In
      </a>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" relative h-8 w-8 rounded-full hover:bg-accent transition-colors flex items-center justify-center focus-visible:outline-none">
          {session.user?.image ? (
            <Image
              src={session.user.image}
              alt="User avatar"
              className="rounded-full"
              fill
              sizes="38"
              referrerPolicy="no-referrer"
            />
          ) : (
            <UserIcon className="h-4 w-4" />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="p-2">
          <p className="text-sm font-medium">{session.user?.name}</p>
          <p className="text-xs text-muted-foreground">
            {session.user?.email}
          </p>
        </div>
        <DropdownMenuItem
          className="cursor-pointer text-destructive focus:text-destructive"
          onClick={() => signOut({ callbackUrl: '/login' })}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}