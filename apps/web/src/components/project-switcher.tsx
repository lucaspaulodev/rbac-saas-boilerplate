'use client'

import { useQuery } from '@tanstack/react-query'
import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { getOrganizations } from '@/http/get-organizations'
import { getProjects } from '@/http/get-projects'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function ProjectSwitcher() {
  const { slug: orgSlug } = useParams<{
    slug: string
  }>()

  const { data, isLoading } = useQuery({
    queryKey: [orgSlug, 'projects'],
    queryFn: () => getProjects(orgSlug),
    enabled: !!orgSlug,
  })

  console.log(data)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-[168px] items-center gap-2 rounded p-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary">
        {/* {currentOrganization ? (
          <>
            <Avatar className="mr-2 size-4">
              {currentOrganization.avatarUrl && (
                <AvatarImage src={currentOrganization.avatarUrl} />
              )}
              <AvatarFallback>
                {currentOrganization.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <span className="truncate text-left">
              {currentOrganization.name}
            </span>
          </>
        ) : (
          
        )} */}
        <span className="text-muted-foreground">Select Project</span>
        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        className="w-[200px]"
        sideOffset={12}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Projects</DropdownMenuLabel>
          {/* {organizations.map((organization) => ( */}
          <DropdownMenuItem /* key={organization.id} */ asChild>
            <Link href={``}>
              <Avatar className="mr-2 size-4">
                {/* {organization.avatarUrl && (
                  <AvatarImage src={organization.avatarUrl} />
                )} */}
                <AvatarFallback />
              </Avatar>
              <span className="line-clamp-1">Projeto teste</span>
            </Link>
          </DropdownMenuItem>
          {/* ))} */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="">
            <PlusCircle className="mr-2 size-4" />
            Create Organization
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
