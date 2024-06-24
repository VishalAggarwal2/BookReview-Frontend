"use client"
import React, { useState } from 'react';
import './CommentForm.css'; // Import the CSS file
import { addCommentMutation } from '@/Hooks/CommentController/commentMuttainandQuery';

const CommentForm = ({bookReviewId,userId}:any) => {
  const [commentDsc, setCommentDsc] = useState('');
      
  const handleChange = (e:any) => {
    setCommentDsc(e.target.value);
  };

  const mutation = addCommentMutation();

  const handleSubmit = (e:any) => {
    e.preventDefault();
  const data = {
    bookReviewId:bookReviewId,
    userId:userId,
    message:commentDsc
  }
  mutation.mutate(data);
    console.log(commentDsc); // Log the value of commentDsc on submit
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="form-group">
        <label htmlFor="commentDsc">Add Comment:</label>
        <textarea
          id="commentDsc"
          name="commentDsc"
          value={commentDsc}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default CommentForm;
