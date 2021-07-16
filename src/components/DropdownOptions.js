import React from 'react';

const DropdownOptions = (props) => {
    
    // this.props.subcategories.map(subcategory=>
    //     { 
    //      //    console.log("STATE",parseInt(this.state.category))
    //      //     console.log("SUBCATEGORY",subcategory.category_id)
    //      if( subcategory.category_id == parseInt(this.state.category)){
    //          console.log("STATE",parseInt(this.state.category))
    //          console.log("SUBCATEGORY",subcategory.category_id)
    //          return <option value={subcategory.name}>{subcategory.name}</option>
    //              }
    //      }
    //  )
    return (
        <>

        {
            props.subcategories.map(subcategory=>
                    { 
                     //    console.log("STATE",parseInt(this.state.category))
                     //     console.log("SUBCATEGORY",subcategory.category_id)
                     if( props.categoryID == subcategory.category_id){
                         console.log("SUBCATEGORY.CATEGORYID",subcategory.category_id)
                         console.log("CATEGORY ID PROPS",props.categoryID)
                         return <option value={subcategory.id}>{subcategory.name}</option>
                             }
                     }
                 )

        }






        </>    );
};

export default DropdownOptions