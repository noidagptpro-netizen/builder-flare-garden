import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      let { data, error } = await supabase
        .from('products')
        .select('*')

      if (error) {
        console.error(error)
      } else {
        setProducts(data)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
