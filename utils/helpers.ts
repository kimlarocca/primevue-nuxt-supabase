// get and set the user profile
export const getAndSetUserProfile = async () => {
    const currentUser = useSupabaseUser()
    const currentUserProfile = useCurrentUserProfile()
    const client = useSupabaseClient()
    const {
        data,
        error
    } = await client
        .from('profiles')
        .select('*')
        .eq('id', currentUser.value.id)
        .single()
    if (error) {
        console.error(error)
    } else if (data) {
        currentUserProfile.value = data
    }
}

// log out the current user
export const logOutUser = async () => {
    // sign out from supabase
    const client = useSupabaseClient()
    client.auth.signOut()

    // clear the user profile
    getAndSetUserProfile()

    // redirect to the logout page
    navigateTo('/logout')
}