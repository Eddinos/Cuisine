import React, { useContext } from "react"
import IngredientsContext from '../providers/ingredients'

import { IngredientsClassName } from './ingredients.module.scss'

const Ingredients = () => {
    // static contextType = IngredientsContext
    const ingredients = useContext(IngredientsContext)
    return (
       <div className={ IngredientsClassName }>
         <h4>Ingrédients</h4>
         <table>
             {
                 ingredients.map((ingredient, index) => 
                 <tr key={index}>
                    <td>{ingredient.label}</td>
                    <td>{ingredient.quantity}</td>
                 </tr>
                 )
             }
         </table>
       </div>
    )
}

export default Ingredients