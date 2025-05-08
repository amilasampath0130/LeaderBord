// components/ui/dropdown-menu.tsx
import * as React from 'react'
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'

const DropdownMenu = DropdownPrimitive.Root

const DropdownMenuTrigger = DropdownPrimitive.Trigger

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <DropdownPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80',
        className
      )}
      {...props}
    />
  </DropdownPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}