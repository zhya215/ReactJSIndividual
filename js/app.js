$( "#medias" ).on( "click", function( event ) {
    React.render(
        <MediaList url='https://api.instagram.com/v1/media/popular?access_token=361339398.1fcdeb3.0d49a5a8b5ba4719b73245629912b729'/>,
        document.getElementById('content')
    )
})

$( "#users" ).on( "click", function( event ) {
    React.render(
        <UserList url='https://api.instagram.com/v1/users/search?q=zhili&access_token=361339398.1fcdeb3.0d49a5a8b5ba4719b73245629912b729'/>,
        document.getElementById('content')
    )
})

