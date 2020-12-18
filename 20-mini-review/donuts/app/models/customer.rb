class Customer < ApplicationRecord
    has_many :orders
    has_many :donuts, through: :orders
end
