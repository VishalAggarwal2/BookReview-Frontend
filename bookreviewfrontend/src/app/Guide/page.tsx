import React from 'react'
import "./Guide.css"
const page = () => {
  return (
    <div>
      <img style={{ width: "100vw", height: "150vh" }} className='absolute -z-10' src="https://images.shiksha.com/mediadata/images/1616416318phpToGO75.jpeg" alt="" />
    <div className="guide-container">
    <h1 className="guide-title">A User-Friendly Guide to the Website</h1>
    <div className="guide-section">
      <h2 className="guide-subtitle">1. Sign In</h2>
      <ul className="guide-list text-black">
        <li>Go to the <strong>Get Started</strong> page on the website.</li>
        <li>Enter your username and password.</li>
        <li>Click the <strong>"Sign In"</strong> button to access your account.</li>
        <li>For a quicker process, sign in with your Google account to avoid the hassle of receiving OTPs on your email.</li>
      </ul>
    </div>
    <div className="guide-section text-black">
      <h2 className="guide-subtitle">2. Navigate the Header Sections</h2>
      <ul className="guide-list">
        <li><strong>ABOUT</strong>
          <ul>
            <li>Click on the <strong>"ABOUT"</strong> section in the header.</li>
            <li>Find all your personal information, including your profile details.</li>
          </ul>
        </li>
        <li><strong>Add Book Review</strong>
          <ul>
            <li>Click on the <strong>"Add Book Review"</strong> section in the header.</li>
            <li>Use the form provided to write and submit your book review.</li>
            <li>Fill in details like the book title, author, and your review.</li>
            <li>Click <strong>"Submit"</strong> to save your review.</li>
          </ul>
        </li>
        <li><strong>Show Past Reviews</strong>
          <ul>
            <li>Click on the <strong>"Show Past Reviews"</strong> section in the header.</li>
            <li>This section lists all the reviews you've written so far.</li>
            <li>Browse through your past reviews to revisit or edit them.</li>
            <li>Reviews will be color-coded: red indicates your review is under validation by the library team, and green means it has been validated and is visible in the <strong>"All Book Reviews"</strong> section.</li>
          </ul>
        </li>
        <li><strong>All Book Reviews</strong>
          <ul>
            <li>Click on the <strong>"All Book Reviews"</strong> section in the header.</li>
            <li>See reviews written by all users.</li>
            <li>Use the upvote button to support reviews you find helpful.</li>
            <li>Leave comments on reviews to share your thoughts or ask questions.</li>
          </ul>
        </li>
      </ul>
    </div>
    <p>By following these steps, you can easily navigate the website and make the most of its features.</p>
  </div>
  </div>

  )
}

export default page
