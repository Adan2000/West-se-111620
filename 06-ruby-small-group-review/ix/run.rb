require_relative "lib/Manager"
require_relative "lib/Employee"
require_relative "lib/ManagerEmployeeContract"
require 'pry'


e1 = Employee.new('Dana', 1000000.00)
e2 = Employee.new('Ritchered', 200000.00)
e3 = Employee.new('Rose', 199999.00)

m1 = Manager.new('ix', 'Beer', 99)
m2 = Manager.new('Adam', 'HeadBand', 105)

c1 = m1.hire_employee(e3, '11/20/2020')
c2 = m1.hire_employee(e2, '12/20/2020')

c3 = m2.hire_employee(e2, '03/10/2019')
c4 = m2.hire_employee(e1, '11/20/2020')



binding.pry
puts "done"
