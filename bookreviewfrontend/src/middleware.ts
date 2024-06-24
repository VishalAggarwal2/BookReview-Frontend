import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/about(.*)",
  "/AddBookReview(.*)",
  "/ShowPastReview(.*)",
  "/AllBookReview(.*)",
  "/forum(.*)",
  "/IndividualReview(.*)"
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
