const mealButton = document.getElementById('meal-btn')
const mealContainer = document.getElementById('meal-container')

mealButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(res => {
    createMeal(res.meals[0]);
  })
})

function createMeal(meal) {

  let ingredients = [];
  for (let i = 1; i<=20; i++) {
    if(meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]}, ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  console.log(ingredients);

  mealContainer.innerHTML = `
  <div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
        <p><strong>Category:</strong>${meal.strCategory}</p>
        <p><strong>Country:</strong>${meal.strArea}</p>
      </div>
      <div class="column seven">
      <h2>${meal.strMeal}<h2>
      <p>${meal.strInstructions}</p>
      <ul>ingredients:
      ${ingredients.map(ingredient =>
        `<li>${ingredient}</li>`
      ).join('')}
       </ul>
      </div>
      <div class="vid-container">
        <a href="${meal.strYoutube}" target="_blank">Video Tutorial</a>
      </div>
      <div class="footer">
      <a href="${meal.strSource}" target="_blank">Source</a>
      </div>
  </div>
        `;
};
