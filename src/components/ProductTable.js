import { useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable (props) {
    console.log(props)


return(
    <div>
        <ProductRow products={props.products}/>

    </div>
)
}

export default ProductTable