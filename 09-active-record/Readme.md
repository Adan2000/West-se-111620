# Intro to Active Record 
# SWBATs 
- Describe how gems work and the value of shared code
- Implement ActiveRecord in their projects
- Practice creating migrations for updating the database structure
- Explain how rake works and how to run rake tasks
- Distinguish between and define “model”, “class”, and “table”
- Practice with ActiveRecord::Base instance and class methods
- Perform persistent CRUD actions on one model using ActiveRecord

[Ruby Active Record Docs](https://guides.rubyonrails.org/index.html)

# How to build an Active Record App
1. Pick a domain 
```
Players -< Characters 

```
2. Create a migration
```
rake db:create_migration NAME=create_players
rake db:create_migration NAME=create_characters

```

3. Write migrations 
```
    create_table :players do |t|
      t.string :name
      t.string :email
      t.integer :phone 

      t.timestamps
    end

    create_table :characters do |t|
      t.string :name
      t.integer :age
      t.string :class
      t.string :species
      t.integer :level
      t.belongs_to :player
       
      t.timestamps
    end



```

4. Run the migration and check migration
```
   rake db:migrate 

   # check schema 
   # test but building a few instances

   rake db:console
    
   Player.create(name:'Liz', email:'liz_likes_cats@cat.com', phone:1231231234)

   # If there is an issue with your schema you can rollback your migration with rake db:rollback 

```

5. Create model and connect to active record
```
   class Character < ActiveRecord::Base

   end 

   class Player < ActiveRecord::Base

   end 

``