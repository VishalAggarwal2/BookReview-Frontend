"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { isInLibraryTeam } from '@/Hooks/Query/UserQuery';
import { useUser } from '@clerk/nextjs'
import { notInLibrary } from '@/Hooks/Query/BookReviewQuery';
import BookReviewCardLibraryTeam from '@/components/BookReview/BookReviewCardLibraryTeam';
import BookReviewCard from '@/components/BookReview/BookReviewComponent';
const page = () => {
    const { isLoaded, isSignedIn, user } = useUser();
  
    if (!isLoaded || !isSignedIn) {
      return <div>Not signed in.</div>;
    }
    
    const query = useQuery({ queryKey: ['isInlibraryTeam'], queryFn: ()=>{return isInLibraryTeam(user.id)} });
    const query2 = useQuery({ queryKey: ['notInLibraryBooks'], queryFn:notInLibrary} )

    if (query.isLoading) {
        return <div>Loading...</div>;
      }

   if(!query.data){
    return <div>Not Authenticated</div>
   }


   if (query2.isLoading) {
    return <div>Loading...</div>;
  }
  if(query2.error){
    return <div> error</div>
  }

  
  return (
    <div>
{
query2.data.map((e:any)=>{
  return   <BookReviewCard key={e.reviewId} user={e.user} reviewId={e.reviewId} userId={user.id} likeCount={e.likeCount}  bookDsc={e.bookDsc} bookImageUrl={e.bookImageUrl}  bookReview={e.bookReview} bookName={e.bookName} bookType={e.bookType} isValidated={e.isValidated} presentAtLibrary={e.presentAtLibrary} referenceNumber={e.referenceNumber} /> // Add unique key
})
}
    </div>
  )
}

export default page
