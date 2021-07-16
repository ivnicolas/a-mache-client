export const fetchPosts= () =>{
    return(dispatch)=>{
        fetch('http://localhost:3000/posts.json')
        .then(response => response.json())
        // .then(allposts=> console.log(allposts))
        .then(allposts =>{ dispatch({type: 'FETCH_POSTS', payload:allposts})
        })
    }
}

export const addPosts = post => {
    return(dispatch) => {
        fetch('http://localhost:3000/posts.json', {
            method: "POST",
            body: JSON.stringify(post),
            headers: { "Content-Type": "application/json"}
        })
        .then(response => response.json())
        // .then(allcategories=> console.log(allcategories))
        .then(post =>{ dispatch({type: 'ADD_POST', payload:post})
        })
        
    }
   
}