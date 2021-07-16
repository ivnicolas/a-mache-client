// test2
// export const fetchSubcategories= (category_id) =>{
//     return(dispatch)=>{
//         fetch(` http://localhost:3000/categories/${category_id}/subcategories.json`)
//         .then(response => response.json())
//         // .then(allcategories=> console.log(allcategories))
//         .then(allsubcategories =>{ dispatch({type: 'FETCH_SUBCATEGORIES', payload:allsubcategories})
//         })
//     }
// }

// test1
export const fetchSubcategories= () =>{
    return(dispatch)=>{
        fetch('http://localhost:3000/subcategories.json')
        .then(response => response.json())
        // .then(allcategories=> console.log(allcategories))
        .then(allcategories =>{ dispatch({type: 'FETCH_SUBCATEGORIES', payload:allcategories})
        })
    }
}