require_relative "lib/Manager"
require_relative "lib/Employee"
require_relative "lib/ManagerEmployeeContract"
require 'pry'


#Test your code here

e1 = Employee.new("Daniel", 1000.0)
e2 = Employee.new("Dain", 2500.0)
e3 = Employee.new("Charlie", 900.0)

m0 = Manager.new("Amelie", 1000000, "wizards", 35)
m1 = Manager.new("Ix", 1000000, "wizards", 27)
m2 = Manager.new("Adam", 500000, "hackers", 41)

mec1 = ManagerEmployeeContract.new(Time.now.to_s, m1, e1)
mec2 = ManagerEmployeeContract.new(Time.now.to_s, m1, e2)
mec3 = ManagerEmployeeContract.new(Time.now.to_s, m2, e3)
mec4 = ManagerEmployeeContract.new(Time.now.to_s, m2, e2)

binding.pry
puts "done"
