
# ruby-many-to-many-relationships

## SWBATs
Implement both sides of a many to many relationship
Practice keeping groups of data related to classes on the class as a class variable
Demonstrate single source of truth by not storing collections of objects on other objects
Demonstrate single source of truth by not storing one object in multiple collections


### Review of One-to-Many
* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method \(class or instance\) through naming conventions

## Relationships 
### One to many


### Many to Many


## DEMO Deliverables 
* Create a grocery_item class. The class should have these methods:
  * `GroceryItem#initialize` which takes a item_name, price
  * `GroceryItem#item_name` returns a string, can be read
  * `GroceryItem#price` returns and integer, can be read and updated

  * `GroceryItem#stores` that returns an array of Store 
  instances the grocery_item can be found
  * `GroceryItem.all` that returns all the GroceryItem created.

* Create a Store class. The class should have these methods:
  * `Store#name` that returns a string, can be read and updated
  * `Store#location` that returns a string, can be read
  * `Store.all` that returns all the Stores created.
  * `Store#grocery_items` that returns the array of the grocery_items in the store
* `Store#make_order` that takes a amount, creates a new order 

* Create a Order class. The class should have these methods:
  * `Order#amount` that returns a integer, can be updated 
  * `Order#store` that returns a store object, can not be changed 
  * `Order#grocery_item` that returns a grocery_item object, can not be changed




