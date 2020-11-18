## SWBATs
* How to submit labs!
* How to navigate my system! 
* How to test my code!

* Define `object` in programming domain
* Create a class and instantiate an instance of the class
* Explain the difference between a class and an instance
* Pass arguments to `new` by defining an initialize method in class
* Create instance methods
* Call methods on the implicit or explicit `self`
* Define attribute readers and writers using `attr_` macros
* Get more practice with array compositions \(`each`, `map`, `select`/`filter`\)
* Explain the need for variable scope and why it's important to not utilize global variables

## Common Mac Terminal Commands 
```

mkdir folder_name_here
#this makes a new folder 

touch file.rb
#this makes a new file/directory, you can do it with any kind of file not just ruby

pwd 
#shows the directory you are in

ls
#lists everything in your directory 

cd folder_name
or
cd folder_name/another_folder/and_another_folder/this_is_the_folder_i_wanted
#moves you into a folder, you can chain nested folders  

cd..
#moves you back into the parent directory 

open index.html
#opens a file 

```

## Github
```
 git add .
 git commit -m 'some message'
 git push origin master`
```

## Discuss 
- What is an Object in Ruby?
- In ruby everything is an object
- What are the benefits of Object Oriented Programming?
    - readable 
    - flexible, dynamic
    - DRY
- What is the difference between a class and an instance?

## DEMO Deliverables

Here's we are building, a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"user_id": 3, "balance": 100}
```

We will write an implementation of a bank account that meets the following requirements:

* can print the balance of the account
* can deposit money into the account
* can withdraw money from the account
* keeps track of the account number
* Print out all the bank accounts 