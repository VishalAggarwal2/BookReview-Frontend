import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import React from 'react'
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
  } from '@clerk/nextjs'
  import { FaBars } from "react-icons/fa";

  const NavbarButton = () => {
    return (
        <Popover>
        <PopoverTrigger><FaBars />
        </PopoverTrigger>
        <PopoverContent> <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"3rem"}}>
<Link href={"/about"}>About</Link>
<Link href={"/AddBookReview"}>AddBookReview</Link>
<Link href={"/ShowPastReview"}>ShowPastReview</Link>
<Link href={"/AllBookReview"}>AllBookReview</Link>

              
            <UserButton />
            </div>
          
          </SignedIn></PopoverContent>
      </Popover>
      
    )
  }
  
  export default NavbarButton
  