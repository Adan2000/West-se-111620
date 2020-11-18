require 'pry'

require_relative 'models/users.rb'
require_relative 'models/tweets.rb'

coffee_dad = User.new('coffee dad', 1, 'Just a dad that likes coffee')
tea_dad = User.new('tea dad', 2, 'tea is supeiror to coffee')

tweet1 = Tweet.new('coffeeeeeeeeee time', coffee_dad)
tweet2 = Tweet.new("don't worry be frappe", coffee_dad)
tweet3 = Tweet.new('Everything I brew, I brew for you', coffee_dad)

tweet4 =  Tweet.new('T', tea_dad)
tweet5 =  Tweet.new('Matcha, Matcha maaaaan I wanna be a green tea dad!', tea_dad)


binding.pry
0
































# arr = [{name:'rose', job:'Cat Technology Offiicer'}, {name:'ix', job:'Lead Instructor'}, {name:'Lantz', job:'Lead Instructor'}, {name:'Adam', job:'Instructor'}, {name:'Hal', job:'Instructor'}]

# map_arr = arr.map{|person| person[:name]}

# select_arr = arr.select{|person| person[:job] == 'Instructor'}
# instructor_map = select_arr.map{|instructor| instructor[:name]}
# select_arr_no_match = arr.select{|person| person[:job] == 'Cook'}

# find_arr = arr.find{|person| person[:job] == 'Instructor'}
# find_arr_no_match = arr.find{|person| person[:job] == 'Cook'}