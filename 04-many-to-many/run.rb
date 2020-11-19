require 'pry'

require_relative 'models/Grocery_Item.rb'
require_relative 'models/Store.rb'
require_relative 'models/Order.rb'

g1 = GroceryItem.new('Bread flower', 6.00)
g2 = GroceryItem.new('Butter', 3.50)
g3 = GroceryItem.new('Eggs', 4.30)
g4 = GroceryItem.new('Smoke Salmon', 8.00)
g5 = GroceryItem.new('Maitake mushroom', 6.00)

s1 = Store.new('Central  co-op', 'Seattle, Capital Hill')
s2 = Store.new('PCC', 'SeattleCentral District')
s3 = Store.new('Uwajimaya', 'Seattle, International District')


o1 = Order.new(20, s1, g1)
o1 = Order.new(50, s1, g1)
o2 = Order.new(50, s1, g2)
o3 = Order.new(200, s1, g3)
o4 = Order.new(20, s2, g1)
o5 = Order.new(10, s2, g4)
o5 = Order.new(10, s2, g5)
o6 = Order.new(20, s3, g5)


binding.pry
0