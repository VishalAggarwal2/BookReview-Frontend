"use client"
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import './BookReviewForm.css'; // Import CSS for styling (create this file)
import { useAddBookReviewMutation } from '@/Hooks/Mutations/BookReviewMutation';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { useEffect } from 'react';
const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return <div>Not signed in.</div>;
  }

  
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
    console.log("called THE USER FUNCTION");
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

  const email = user?.emailAddresses[0]?.emailAddress;
  const isLnmiitStudent = email.endsWith('@lnmiit.ac.in');

  const [formData, setFormData] = useState({
    bookName: '',
    bookDsc: '',
    bookImage: '',
    bookType: 'novel', // Default value
    presentAtLibrary: false,
    bookReferenceNumber: '',
    bookReview: '', // New field for book review
    userId: user?.id
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRadioChange = (e: any) => {
    setFormData(prevState => ({
      ...prevState,
      presentAtLibrary: e.target.value === 'yes'
    }));
  };

  const countWords = (str: string) => {
    return str.trim().split(/\s+/).length;
  };

  const mutate = useAddBookReviewMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const wordCount = countWords(formData.bookReview);
    if (wordCount > 50) {
      alert("Book review cannot exceed 50 words.");
      return;
    }
    mutate.mutate(formData);
    alert("Added successfully.");
  };

  return (
    <div>
      <img style={{ width: "100vw", height: "120vh" }} className='absolute -z-10' src="https://images.shiksha.com/mediadata/images/1616416318phpToGO75.jpeg" alt="" />

      <div className='pt-5'>
        {isLnmiitStudent ? (
          <form className="book-review-form" onSubmit={handleSubmit}>
            <h2>Book Review Form</h2>

            <div className="form-group">
              <label htmlFor="bookName">Book Name:</label>
              <input
                type="text"
                id="bookName"
                name="bookName"
                value={formData.bookName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bookDsc">Book Description:</label>
              <textarea
                id="bookDsc"
                name="bookDsc"
                value={formData.bookDsc}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bookImage">Book Image URL:</label>
              <input
                type="text"
                id="bookImage"
                name="bookImage"
                value={formData.bookImage}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bookType">Book Type:</label>
              <select
                id="bookType"
                name="bookType"
                value={formData.bookType}
                onChange={handleChange}
                required
              >
                <option value="CSE">CSE</option>
                <option value="MME">MME</option>
                <option value="Maths">Maths</option>
                <option value="CCE">CCE</option>
                <option value="ECE">ECE</option>
                <option value="Physics">Physics</option>
                <option value="Novel">Novel</option>
              </select>
            </div>

            <div className="form-group">
              <label>Present at Library:</label>
              <label>
                <input
                  type="radio"
                  name="presentAtLibrary"
                  value="yes"
                  checked={formData.presentAtLibrary === true}
                  onChange={handleRadioChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="presentAtLibrary"
                  value="no"
                  checked={formData.presentAtLibrary === false}
                  onChange={handleRadioChange}
                />
                No
              </label>
            </div>

            {formData.presentAtLibrary && (
              <div className="form-group">
                <label htmlFor="bookReferenceNumber">Book Reference Number:</label>
                <input
                  type="text"
                  id="bookReferenceNumber"
                  name="bookReferenceNumber"
                  value={formData.bookReferenceNumber}
                  onChange={handleChange}
                  required={formData.presentAtLibrary}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="bookReview">Book Review (50 Words Max Limit):</label>
              <textarea
                id="bookReview"
                name="bookReview"
                value={formData.bookReview}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className='book-review-form mt-7 pt-6'>
            <b>
            <h1  className=' text-white mt-4'>You are not an LNMIIT student. You can't add a book review.</h1>
            </b>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
