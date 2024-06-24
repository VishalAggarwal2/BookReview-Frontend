export const addCommentQuery =`query Query($message: String, $bookReviewId: Int, $userId: String) {
  addComment(message: $message, bookReviewId: $bookReviewId, userId: $userId)
}`


export const getBookReviewCommentQuery =`query GetParticularBookReviewComment($bookReviewId: Int) {
  getParticularBookReviewComment(bookReviewId: $bookReviewId) {
    user {
      firstName
      imageUrl
      email
    }
    message
  }
}
  `