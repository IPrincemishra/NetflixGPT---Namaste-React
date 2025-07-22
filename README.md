# NetflixGPT

- Create vite project
- Configured tailwindcss
- Installed react-router-dom
- Header
- Login / Sign up
- form validation
- useRef Hook
- Firebase Setup
- Deploy on Firebase Hosting : Pending
- Create SignUp user Account
- Implement Sign in user api
- created redux store with userSlice
- Implement Sign Out
- Update Profile
- BugFix : Sign up user displayName and profile picture update
- BugFix : if the user is not logged in Redirect / browser to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMBD API & create an app & get access token
- Get Data from TMBD now Playing movies list API
- Custom Hooks for Now Playing Movies
- Create movieSlice
- Update Store with movie Data
- Planning for MainContainer and SecondaryContainer
- Fetch Data for trailer Video
- Update store with trailer Video Data
- Embedded the youtube video and make it autoplay and muted
- Tailwind classes to make main container look awesome
- Build secondary container with movie lists
- build different movie lists with movie cards
- Create MovieCard component
- Designed Browse page with tailwind css

## features

- Login / Sign up
  - Sign In / Sign Up Form
  - redirect to browse page
- Browse (After Authentication)
  - Header
  - Main Movie
    - Trailor in BG
    - Title & Description
    - MovieSuggestions
      - MovieLists * N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

## Browse Page Structure

- MainContainer
  - VideoBackground
  - VideoTitle
- SecondaryContainer
  - MovieList * n
    - Cards * n

## SecondaryContainer Structure

- MovieList - Popular
  - MovieCards * n
- MovieList - Now Playing
  - MovieCards * n
- MovieList - Trending
  - MovieCards * n
- MovieList - Horror
  - MovieCards * n
