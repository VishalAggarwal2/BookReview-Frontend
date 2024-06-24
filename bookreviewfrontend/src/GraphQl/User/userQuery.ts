export const isLibraryTeamQuery=`query Query($userId: String) {
  isInLibraryTeam(userId: $userId)
}`