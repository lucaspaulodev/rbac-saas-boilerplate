import { ChevronDown, LogOut } from 'lucide-react'

import { auth } from '@/auth/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export async function ProfileButton() {
  const { user } = await auth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">{user.name}</span>
          <span className="text-xs text-muted-foreground">{user.email}</span>
        </div>

        <Avatar className="h-10 w-10">
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
          {user.name && (
            <AvatarFallback>
              {user.name
                ?.split(' ')
                .map((name) => name[0])
                .join('')}
            </AvatarFallback>
          )}
        </Avatar>

        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/api/auth/sign-out">
            <LogOut className="mr-2 size-4" />
            Sign Out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
