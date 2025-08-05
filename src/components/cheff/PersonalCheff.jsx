import React, { useEffect, useState } from 'react'
import logo from './chefflogo.jpg'
import './PersonalCheff.css'
import Cheffdata from './Cheffdata'
 const PersonalCheff = () => {
    const [ingredient , setIngredient] = useState()
    const [ingredientlist, setingredientlist] =useState([])
    const [recipeShown, setRecipeShown]= useState(false)
    const [suggestedIngredients, setSuggestedIngredients] = useState([
      'tomato',
      'onion',
      'garlic',
      'chicken',
      'butter'
    ]);
    const recipes = [
      {
        id: 1,
        name: "Garlic Butter Chicken",
        ingredients: [
          "2 chicken breasts",
          "3 cloves garlic (minced)",
          "2 tbsp butter",
          "Salt and pepper to taste",
          "Fresh parsley"
        ],
        instructions: [
          "Season the chicken with salt and pepper.",
          "Heat butter in a pan and add garlic.",
          "Add chicken and cook until golden and fully cooked.",
          "Garnish with parsley and serve hot."
        ]
      },
      {
        id: 2,
        name: "Spaghetti Aglio e Olio",
        ingredients: [
          "200g spaghetti",
          "4 cloves garlic (sliced)",
          "1/4 cup olive oil",
          "Chili flakes",
          "Salt and parsley"
        ],
        instructions: [
          "Boil spaghetti until al dente.",
          "Sauté garlic in olive oil until golden.",
          "Add chili flakes and cooked pasta.",
          "Toss well and top with parsley before serving."
        ]
      },
      {
        id: 3,
        name: "Vegetable Stir Fry",
        ingredients: [
          "1 bell pepper (sliced)",
          "1 cup broccoli florets",
          "1 carrot (julienned)",
          "2 tbsp soy sauce",
          "1 tsp sesame oil"
        ],
        instructions: [
          "Heat oil in a wok.",
          "Add vegetables and stir-fry for 5-7 minutes.",
          "Add soy sauce and stir well.",
          "Serve with rice or noodles."
        ]
      },
      {
        id: 4,
        name: "Tomato Egg Sandwich",
        ingredients: [
            "2 eggs",
            "1 tomato",
            "2 slices of bread",
            "Butter",
            "Salt and pepper"
        ],
        instructions: [
            "Beat and cook the eggs.",
            "Toast bread and add butter.",
            "Slice tomato and assemble with egg on toast.",
            "Season and serve."
        ]
        }
    ];

const filteredRecipes = recipes
  .map((recipe) => {
    const matchedIngredients = recipe.ingredients.filter((ing) =>
      ingredientlist.some((enteredIng) =>
        ing.toLowerCase().includes(enteredIng.toLowerCase())
      )
    );

    const matchCount = matchedIngredients.length;
    const matchScore = (matchCount / recipe.ingredients.length) * 100;

    return {
      ...recipe,
      matchedIngredients,
      matchCount,
      matchScore,
    };
  })
  .filter((recipe) => recipe.matchCount > 0)
  .sort((a, b) => b.matchCount - a.matchCount);



    const showRecipe =()=> {
        setRecipeShown(true)
    }
    const goBack=() =>
    {
        setRecipeShown(false)
        setingredientlist([])
    }

    const getData = (e) => {
    setIngredient(e.target.value)
   }
   const submitData = (e) => {
  e.preventDefault();

  const cleanedIngredient = (ingredient || '').trim().toLowerCase();

  if (!cleanedIngredient) {
    console.warn("Empty ingredient ignored");
    return;
  }

  if (ingredientlist.includes(cleanedIngredient)) {
    console.warn("Duplicate ingredient");
    return;
  }

  setingredientlist((prev) => [...prev, cleanedIngredient]);
  setIngredient('');
};


    // const submitData = (e)=> {
    //     // e.preventDefault();
    //     // ingredient.trim() !== " "?
    //     // setingredientlist((i) => [ ...i, ingredient]) : setIngredient('')
    // }  
    const [headerData,setHeadData] =useState();
    const [display,setDisplay]=useState('flex')
    useEffect(() => {
    setHeadData(ingredientlist.length > 0 ? 'Ingredients on hand:' : '');
    setDisplay(ingredientlist.length >= 4 ? 'flex' : 'none');
  }, [ingredientlist]);

    // useEffect(() => {
    //   if(ingredientlist.length > 0) {
    //     setHeadData("Ingredients on hand:");
    //   }
    //   else {setHeadData("");}
    
    // }, [ingredientlist]);
    
    return (
    
    <div className='MainContainer'>
       
        <div className='HeaderContainer'>
        <img src={logo} alt='chefflogo'/>
        <h2 className='headerHeading'>Personal </h2>
        </div>
        {!recipeShown && <>
        <div className='inputContainer'>
            <input 
            type='text'
            placeholder='Enter ingredients'
            aria-label='Add ingredient'
            value={ingredient}
            onChange={getData}  />
            <button onClick={submitData}>Add Ingredient</button>
        </div>
                   <div className="suggestions">
              
              <div className="suggested-list">
                {suggestedIngredients.map((suggestion, index) => (
                  <button
                    key={index}
                    className="suggestion-button"
                    onClick={() => {
                      if (!ingredientlist.includes(suggestion)) {
                        setingredientlist((prev) => [...prev, suggestion]);
                      }
                    }}>
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
        <div className='contentContainer'>
            <h1>{headerData}</h1>
            <ul>
                {ingredientlist.map((item,index) => (
                        <li key={index}> {item}</li>
                ))
                }
            </ul>
        </div> 
        
        <div style={{display}} className='functionContainer'>
            <div className='textSection'>
                <h3>Ready for a Recipe?</h3>
                 <p>Generate recipe from your list of ingredients</p>
            </div>
            
            <button className='recipeButton' onClick={showRecipe}>Get a recipe </button>  
        </div> 
       </>}
         {recipeShown &&
         <><div className='contentContainer'> 
            <Cheffdata  recipes={filteredRecipes} />
        </div>
        <div  className='functionContainer'>
            <div className='textSection'>
            <h3>Want another recipe?</h3>
            <p>Lets go back to generate another one!</p>
            </div>
            
            <button className='recipeButton' onClick={goBack}>Get back </button> 
            </div>

        </>}
        

    </div>
  )
}

export default PersonalCheff