// BookReviewCard.js
import { AiTwotoneLike } from "react-icons/ai";
import React from 'react';
import './BookReviewCard.css'; // Import CSS for styling (create this file)
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";

import Link from "next/link";
import { UserAvatar } from '../UserAvatar/UserAvatar';

interface Bookreview{
    bookType:String,
    bookName:String,
    bookDsc:String,
    bookReview:String,
    bookReferenceNumber:String
}


import { addLikeMutation, deleteLikeMutation } from "@/Hooks/LikeController/LikeQueryMutation";
// { review }:{review:Bookreview}
const BookReviewCard = ({bookDsc,user,bookImageUrl,bookName,bookType,presentAtLibrary,referenceNumber,isValidated,likeCount,reviewId,userId,bookReview}:any) => {
  const mutation = addLikeMutation();
  const mutation2 = deleteLikeMutation();
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
        <div>
<b>
  Book Review :-
</b>
    {
      bookReview
    }
  </div>
        {/* <p className="book-review">{bookReview}</p> */}
 {presentAtLibrary && (
          <p className="library-info">
            <strong>Present at Library:</strong> Yes<br />
            <strong>Reference Number:</strong> {referenceNumber}
          </p>
        )} 
<div className="flex flex-row justify-evenly text-2xl mt-3">
  <div>

    <button>
 
  <AiTwotoneLike onClick={()=>mutation.mutate({userId:userId,reviewId:reviewId})} /> { likeCount }
    </button>
    <button>
 
  <AiOutlineDislike onClick={()=>mutation2.mutate({userId:userId,reviewId:reviewId})} /> 
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

export default BookReviewCard;
