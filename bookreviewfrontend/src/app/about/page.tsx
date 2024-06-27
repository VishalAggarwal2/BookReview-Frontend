"use client"
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import styles from './about.module.css'; // Adjust the path according to your project structure
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { isInLibraryTeam } from "@/Hooks/Query/UserQuery";
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  if (!isLoaded || !isSignedIn) {
    return <div>Not signed in.</div>;
  }

  const userParameters = {
    userId: user?.id,
    firstName: user?.firstName,
    email: user?.emailAddresses[0]?.emailAddress, // Ensure to handle null or undefined safely
    imageUrl: user?.imageUrl,
    // Add other fields you want to update
  };

   const updateUser=async(user:any)=>{
    console.log("called");
const data = await axios.post("https://bookreview-backend-2-t5ub.onrender.com/graphql",{query:`query Query($user: UserInput) {
  updateUser(user: $user)
}`, variables:{
    user:user

} })
console.log(data);

};
  useEffect(()=>{
updateUser(userParameters);
  },[])


  const query = useQuery({ queryKey: ['isInlibraryTeam'], queryFn: ()=>{return isInLibraryTeam(user.id)} })
    if (query.isLoading) {
        return <div>Loading...</div>;
      }


  return (
    <div>
<img style={{width:"100vw" , height:"100vh"}} className=' absolute -z-10'  src="https://images.shiksha.com/mediadata/images/1616416318phpToGO75.jpeg" alt="" />
    <div className=" pt-5">

    <div className={styles.container}>
      <h1 className="text-4xl">
        {user.firstName} {user.lastName}
      </h1>

      <div className={styles.userDetails}>
        <img src={user.imageUrl} alt="User Profile" />
        <div>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p className={styles.email}><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
          <div>
          {
 query.data?<div className="flex flex-col gap-2">
       <button className=" bg-blue-800 text-white border-solid border-r-8 p-2" style={{borderRadius:"10px"}}>
       <Link href="/LibraryTeam/AllReview">
       Validate The Review
       </Link>
       </button>

       <button className=" bg-blue-800 text-white border-solid border-r-8 p-2" style={{borderRadius:"10px"}}>
  <Link href="/LibraryTeam/BookNotInLibrary">
        
        BookNotInLibrary
        
</Link></button>

 </div>:<></>
 
 }
        </div>
        </div>
      
      </div>
    </div>
    
    </div>
    </div>
  );
}
