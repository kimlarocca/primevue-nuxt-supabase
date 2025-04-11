export default defineNuxtRouteMiddleware( async () => {
  const currentUser = useSupabaseUser()
  const currentUserProfile = useCurrentUserProfile()
  const client = useSupabaseClient()
  let user = await client.auth.getUser()
  const session = await client.auth.getSession()

  client.auth.onAuthStateChange( async () => {
    user = await client.auth.getUser()
  } )

  // check supabase session for logged in user
  if ( user?.data?.user ) {
    currentUser.value = user?.data?.user
  } else if ( session?.data?.session?.user ) {
    currentUser.value = session?.data?.session?.user
  }

  // if the user is not authorized, redirect them to the login page
  // if they are, get their profile data
  if ( !currentUser.value ) {
    return navigateTo( '/' )
  } else if ( !currentUserProfile.value ) {
    getAndSetUserProfile()
  }
} )