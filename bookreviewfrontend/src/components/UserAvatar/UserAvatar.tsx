import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function UserAvatar({user}:any) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
      <Avatar>
      <AvatarImage src={user?.imageUrl? `${user.imageUrl}` :"https://github.com/shadcn.png"} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
   <div>
    <div>
    FirstName :- {user?.firstName}
    </div>
    <div>
    Email :- {user?.email}
    </div>
   </div>
      </HoverCardContent>
    </HoverCard>
  )
}
