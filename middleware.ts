import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    // Array of public routers that don't need auth
    publicRoutes:['/','/api/webhook/clerk'],

    // Array of routes to be ignored by auth middleware.
    ignoredRoutes: ['/api/webhook/clerk']
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 