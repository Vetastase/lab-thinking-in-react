import { useState } from 'react';

function SearchBar (props) {
    // console.log("SearchBar", props)
    
    return(
        <div>
        <label>Search</label>
        <br></br>
        <input type="text" onChange={props.checkProductsType} placeholder="search..."></input>
        <br></br>
        <input type="checkbox" onChange={props.inStockProduct}></input>
        <label>Only products in stock</label>
        </div>
    )
}

export default SearchBar

