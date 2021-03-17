import React from 'react'
import './../App.css';

function ProductTable(props) {
  return (
   
      <table className="ProductTable">
         <tr>
            <th className="TableCell">Name</th>
            <th className="TableCell">Price</th>
         </tr>

         {props.products.map((product) => {
         return (          
         <tr>
            <td className={product.stocked === true ? 'TableCell' : 'TableCell unstocked'}>{product.name}</td>
            <td className="TableCell">{product.price}</td>
         </tr>
         )
         }
         )}
      </table>
   
  )
}

export default ProductTable
