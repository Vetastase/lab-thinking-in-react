import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  // what we type in our form
  const checkProductsType = (event) => {
    // to see what's needed console.log the event. Break it down slowly. First the target then the value then (...) <- click to see what you typed in the Search Bar. You can see the "onChange" we used for react as well. All in the devtools. You can console.log too like (event.target.value)
    console.log(event.target.value)

    if(event.target.value === ""){
      setProducts([...jsonData])
      return products
    }

    const filteredproducts = products.filter(product => product.name.toUpperCase().startsWith(event.target.value.toUpperCase()) )
      // [...] creates a copy of the filteredproducts array
      setProducts(filteredproducts)
      return filteredproducts
    }
 
    const inStockProduct = (event) => {

      if(event.target.checked){
        const filteredproducts = products.filter(product => product.inStock)
        setProducts(filteredproducts)
        return filteredproducts
      } else {
        setProducts([...jsonData])
      return products
      }
    }

  
 
  return(
      <div className="container">
        <h1>IronStore</h1>

      <div className="row">
      <div className="d-flex justify-content-center"><SearchBar checkProductsType={checkProductsType} inStockProduct={inStockProduct}/></div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center"><ProductTable products={products}/></div>
      
        </div>
      
      
      </div>
  )
}

export default ProductsPage