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
<Link className="bg-red-950 text-white p-2" style={{borderRadius:"10px"}} href={"/about"}>About</Link>
<Link className="bg-red-950 text-white p-2" style={{borderRadius:"10px"}} href={"/AddBookReview"}>AddBookReview</Link>
<Link className="bg-red-950 text-white p-2" style={{borderRadius:"10px"}} href={"/ShowPastReview"}>ShowPastReview</Link>
<Link className="bg-red-950 text-white p-2" style={{borderRadius:"10px"}} href={"/AllBookReview"}>AllBookReview</Link>
<Link className="bg-red-950 text-white p-2" style={{borderRadius:"10px"}} href={"/developers"}>Developer</Link>
              
            <UserButton />
            </div>
          
          </SignedIn></PopoverContent>
      </Popover>
      
    )
  }
  
  export default NavbarButton
  