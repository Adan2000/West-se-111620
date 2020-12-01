require_relative '../config/environment'

u1 = User.all.last
puts u1
t1 = Tweet.new(nil, 'hhhhi', u1.id)

binding.pry

