import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  // what we type in our form
  const checkproducttyped = (event) => {
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
      <div>
        <h1>IronStore</h1>

      <SearchBar checkproducttyped={checkproducttyped} inStockProduct={inStockProduct} />
      <ProductTable products={products}/>
      </div>
  )

  }
export default ProductsPage