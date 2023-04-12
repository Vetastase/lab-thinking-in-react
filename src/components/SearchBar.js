import { useState } from 'react';

function SearchBar(props){
    console.log("SearchBar", props)
    return(
        <div>
        <label>Search</label>
            <input onChange={props.checkproducttyped} placeholder="Search..."></input>
            <input onChange={props.inStockProduct} type="checkbox"></input><label>Only show products in Stock</label>
            
        </div>
    )
}

export default SearchBar

