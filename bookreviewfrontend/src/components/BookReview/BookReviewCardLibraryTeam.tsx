"use client"
// BookReviewCard.js
import { AiTwotoneLike } from "react-icons/ai";
import React from 'react';
import './BookReviewCard.css'; // Import CSS for styling (create this file)
import { FaRegCommentAlt } from "react-icons/fa";
import Link from "next/link";
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { InvalidToValidReview } from "@/Hooks/Query/BookReviewQuery";
interface Bookreview{
    bookType:String,
    bookName:String,
    bookDsc:String,
    bookReview:String,
    bookReferenceNumber:String
}
// { review }:{review:Bookreview}
const BookReviewCardLibraryTeam = ({bookDsc,user,bookImageUrl,bookName,bookType,presentAtLibrary,referenceNumber,isValidated,likeCount,reviewId,userId}:any) => {
  return (
    <div className="book-review-card">
    <div className="card-header flex flex-row align-middle justify-evenly" style={{background:isValidated?"green":"red"}} >
<UserAvatar user={user}></UserAvatar>
      <div>
          <Link href={`/IndividualReview/${reviewId}`}>
          <h2>{bookName}</h2>            
          </Link>

      </div>
    
      <p className="book-type">{bookType}</p>
    </div>
    <div className="card-body">
      <img src={bookImageUrl} alt={bookName} className="book-image" />
      <p className="book-description">{bookDsc}</p>
      {/* <p className="book-review">{bookReview}</p> */}
{presentAtLibrary && (
        <p className="library-info">
          <strong>Present at Library:</strong> Yes<br />
          <strong>Reference Number:</strong> {referenceNumber}
        </p>
      )} 
<div className="flex flex-row justify-evenly text-2xl mt-3">
<div>


<button onClick={()=>{
InvalidToValidReview(reviewId,userId)
  }} className=" bg-green-400 text-white border-solid p-2" style={{borderRadius: "20px"}}>
    Validate
  </button>
</div>

<Link href="/IndividualReview/1">
<FaRegCommentAlt/>
</Link>
</div>
    </div>
  
  </div>
  );
};

export default BookReviewCardLibraryTeam;



