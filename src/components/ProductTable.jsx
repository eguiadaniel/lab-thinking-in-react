import React from 'react'
import './../App.css';

function ProductTable(props) {
  return (
   
      <table className="ProductTable">
         <thead>
         <tr>
            <th className="TableCell">Name</th>
            <th className="TableCell">Price</th>
         </tr>
         </thead>
         
          <tbody>
            {props.products.map((product) => {
          return (          
            <tr key={product.name}>
            <td className={product.stocked === true ? 'TableCell' : 'TableCell unstocked'}>{product.name}</td>
            <td className="TableCell">{product.price}</td>
         </tr>

         )
         }
         )}
         </tbody>
      </table>
   
  )
}

export default ProductTable
