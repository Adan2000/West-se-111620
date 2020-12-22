Rails Recipes Mini Project
In this project, we will be practicing object relationships in Rails. We will be building out a domain model in which a User can author a recipe. A single Recipe belongs_to a user. A Recipe also has many Ingredients, while a single Ingredient can be found in many Recipes. There are Ingredients that some Users may be allergic to. Build out full CRUD functionality as well as validations for this app.

User -< Recipe 
Recipe -< RecipeIngredient >- Ingredient
Users -< Allergy >- Ingredient

Deliverables
Recipe
- [x] index––show all recipe instances, with the ability to sort by number of ingredients. You can use a search for this feature (Links to an external site.)

- [x] new––ability to create a new recipe and associate it with a particular user. You may want to look into collection select (Links to an external site.)

User
- [x] show page for a user. This should include all of the recipes that a user has authored.

- [x] The ability to delete a user should also exist

Ingredient
- [x] index should show all ingredients, sorted by the number of users allergic to it. For example, if several users are allergic to peanut butter, it should appear higher on the list. You might want to look into ActiveRecord Query Methods (Links to an external site.)
show a particular ingredient. I should be able to see all of the recipes that an ingredient appears in
**Bonus**
Add bootstrap for styling
