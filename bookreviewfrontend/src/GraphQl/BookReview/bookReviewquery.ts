export const addBookReviewQuery = `query Query($bookReviewInput: BookReviewInput) {
  addBookReview(bookReviewInput: $bookReviewInput)
}`


export const getUserBlogReview = `
query AllBookReviewByUserId($userId: String) {
  allBookReviewByUserId(userId: $userId) {
    bookDsc
    bookImageUrl
    bookName
    bookReviewByLcMember
    bookType
    isRejected
    presentAtLibrary
    isValidated
    referenceNumber
    reviewId
    bookReview
    likeCount
    user {
      firstName
      email
      imageUrl
    }
  }
}
`


export const invalidBookReviewQuery=`query AllInValidBookReview {
  allInValidBookReview {
    bookDsc
    bookImageUrl
    bookName
    bookReviewByLcMember
    bookType
    isRejected
    isValidated
    likeCount
    presentAtLibrary
    referenceNumber
    reviewId
    bookReview
    user {
      email
      firstName
      imageUrl
    }
    userId
  }
}`




export const InvalidToValidQuery=`query Query($userId: String, $reviewId: Int) {
  InvalidtoValidBookReview(userId: $userId, reviewId: $reviewId)
}`



export const allBookReviewQuery=`query AllBookReview {
  allBookReview {
    bookDsc
    bookImageUrl
    bookName
    bookReviewByLcMember
    bookType
    isRejected
    presentAtLibrary
    isValidated
    referenceNumber
    likeCount
    reviewId
    bookReview
    user {
      firstName
      email
      imageUrl
    }
  }
}`



export const bookReviewById=`query GetParticularBookReviewId($reviewId: Int) {
  getParticularBookReviewId(reviewId: $reviewId) {
    userId
    user {
      imageUrl
      firstName
      email
    }
    reviewId
    referenceNumber
    presentAtLibrary
    likeCount
    isValidated
    isRejected
    bookType
    bookReviewByLcMember
    bookName
    bookImageUrl
    bookDsc
    bookReview
  }
}`