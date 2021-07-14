export const fetchCategories= () =>{
    return(dispatch)=>{
        fetch('http://localhost:3000/categories.json')
        .then(response => response.json())
        // .then(allcategories=> console.log(allcategories))
        .then(allcategories =>{ dispatch({type: 'FETCH_CATEGORIES', payload:allcategories})
        })
    }
}