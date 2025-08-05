import React from 'react'

const Cheffdata = ({ recipes }) => {
  return (
    <div>
      <h2>Chef Recommends:</h2>
      <article>
        {recipes.length === 0 ? (
          <p>No matching recipes found.</p>
        ) : (
          recipes.map((item, index) => (
            <div key={index}>
                <h3>{item.name}</h3>
                <p><strong>Match Score:</strong> {item.matchCount} ingredients matched</p>
                <p><strong>Match %:</strong> {item.matchScore.toFixed(0)}%</p>

              <strong> Based On Ingredients:</strong>
              <ul>
                {item.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <strong>Instructions:</strong>
              <ol>
                {item.instructions.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
              <hr />
            </div>
          ))
        )}
      </article>
    </div>
  )
}

export default Cheffdata



// import React from 'react'

// const Cheffdata = () => {
    
//   return (
//     <div>
//         <h2>Cheff Recommends:</h2>
//         <article>
//             <p> Based on the Ingredients you have</p>
//         {recipes.map((item,index) => (
//             <div key={index}>
//             <h3 > {item.name}</h3>
//             <strong> Ingredients:</strong>
//             <ul>
//                 {
//                     item.ingredients.map((ingredient,i)=> (
//                      <li key={i}>{ingredient}</li>   
//                     ))
//                 }
//             </ul>
//             <strong> Instructions:</strong>
//             <ul>
//                 {
//                     item.instructions.map((instruction,instruct)=> (
//                      <li key={instruct}>{instruction}</li>   
//                     ))
//                 }
//             </ul>

          
//         </div>  ))}
//         </article>
//     </div>
//   )
// }

// export default Cheffdata