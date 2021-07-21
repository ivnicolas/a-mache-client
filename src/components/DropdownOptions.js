import React from 'react';

const DropdownOptions = (props) => {

    return (
        <>
            {
                props.subcategories.map(subcategory=>
                        { 
                        if( parseInt(props.categoryID) === subcategory.category_id){
                            return <option value={subcategory.id}>{subcategory.name}</option>
                                }
                        }
                    )

            }
        </>    );
};

export default DropdownOptions