export const Likequery =`query Query($userId: String, $bookReviewId: Int) {
  addLike(userId: $userId, bookReviewId: $bookReviewId)
}`


export const deleteLikeQuery=`
query Query($userId: String, $bookReviewId: Int) {
  deleteLike(userId: $userId, bookReviewId: $bookReviewId)
}
`