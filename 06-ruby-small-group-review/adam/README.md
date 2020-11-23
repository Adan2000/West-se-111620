# The Office
 
In this project, you will get the chance to practice object relationships in Ruby, with a particular emphasis on the many to many relationship. Make sure you read the entire README and map out your domain models before writing any code!
 
## Introduction
Welcome to your first day at the Flatiron Mifflin Paper Company. As the Assistant to the Regional Manager, your job is to implement the new Office Management System for both the employees and their managers. This system should help you view the history of any employee and what managers they have worked under.
 
---
## Setup (Code)
Your goal is to build out all of the methods listed in the deliverables. Do your best to follow Ruby best practices. For example, use higher-level array methods such as `map`, `select`, and `find` when appropriate in place of each
 
We've provided you with a console that you can use to test your code. To enter a console session, run `ruby run.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.
 
There are **no** tests! You will need to test your code on your own!
 
---
## Domain Modeling
 
 
Here are some questions to consider:
- What are your models?
- What does your domain look like?
- What are the relationships between your models?
 
---
## Deliverables
 
**`Manager`**
 * `Manager#name`
   * returns a `String` that is the manager's name
 * `Manager#department`
   * returns a `String` that is the department that the manager oversees
 * `Manager#age`
   * returns a `Integer` that is the age of the manager
 * `Manager#employees`
   * returns an `Array` of all the employees that the manager oversees
 * `Manager.all`
   * returns an `Array` of all the managers
 * `Manager#hire_employee`
   * Takes an `Employee` `Object` and start date `String` and creates an    `ManagerEmployeeContract` that ties the manager instance with the given employee
 * `Manager.all_departments`
   * returns an `Array` of all the department names that every manager oversees
 * `Manager.average_age`
   * returns a `Float` that is the average age of all the managers

**`ManagerEmployeeContract`**
 * `ManagerEmployeeContract#employee`
   * returns a `Employee` `Object` 
 * `ManagerEmployeeContract#manager`
   * returns a `Manager` `Object` 
 * `ManagerEmployeeContract#start-date`
   * returns a `String` that is the date that this employee started working under ths manager
* `ManagerEmployeeContract.all`
   * returns a `Array` of all the ManagerEmployeeContracts 
 
**`Employee`**
 * `Employee#name`
   * returns a `String` that is the employee's name
 * `Employee#salary`
   * returns a `Float` that is the employee's salary
 * `Employee#manager_names`
   * returns a `Array` that with the names of the managers this employee has worked under
 * `Employee.all`
   * returns an `Array` of all the employees
 * `Employee.paid_over`
   * takes a `Float` argument and returns an `Array` of all the employees whose salaries are over that amount
 * `Employee.find_by_department`
   * takes a `String` argument that is the name of a department and returns the first employee whose manager is working in that department
 * `Employee#tax_bracket`
   * returns an `Array` of all the employees whose salaries are within $1000 (± 1000) of the employee who invoked the method
* `Employee#total`
   * returns an `Integer` of the total number of Employees 