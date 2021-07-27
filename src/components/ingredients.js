import React, { useContext } from "react"
import IngredientsContext from '../providers/ingredients'

// @ts-ignore
import { IngredientsClassName } from './ingredients.module.scss'

const Ingredients = () => {
    const ingredients = useContext(IngredientsContext)
    return (
       <div className={ IngredientsClassName }>
         <h4>Ingrédients</h4>
         <table>
            <tbody>
            {
                 ingredients.map((ingredient, index) => 
                 <tr key={index}>
                    <td>{ingredient.label}</td>
                    <td>{ingredient.quantity}</td>
                 </tr>
                 )
             }
            </tbody>
         </table>
       </div>
    )
}

export default Ingredients