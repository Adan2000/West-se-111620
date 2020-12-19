class Order < ApplicationRecord
  belongs_to :donut
  belongs_to :customer
  
  validates_presence_of :time, :customer_id, :donut_id
end
