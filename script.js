async function getPosts () {
    
    try {
        const response = await fetch ( 'https://jsonplaceholder.typicode.com/posts' );
        
        //  корректность ответа
        if ( !response.ok ) {
            throw new Error ( 'HTTP request - response is bad.' );
        }
        
        // парсинг JSON-данных
        const posts = await response.json ();
        
        // Первые 5 постов для отображения
        console.log ( 'First 5 posts:', posts.slice (0, 5) );
        
        // Для отображения постов на странице
        const postList = document.getElementById ( 'post-list' );
        posts.slice ( 0, 5 ).forEach ( post => {
           
           const li = document.createElement ( 'li' );
           li.textContent = `${post.title} (ID: ${post.id})`;
           postList.appendChild ( li );
        });
    } catch ( error ) {
        console.error ( 'Error in get posts', error );
    }
}

//hello world
//goodbye world

getPosts ();
