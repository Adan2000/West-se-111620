class GroceryItem
    attr_reader :item_name 
    attr_accessor :price

    @@all = []
    def initialize(item_name, price)
        @item_name = item_name
        @price = price

        @@all << self
    end 
     
    def self.all
        @@all
    end 

    def orders
        Order.all.select{|order| order.grocery_item == self}
    end 

    def stores 
        self.orders.map{|order| order.store.name}.uniq
    end 



  
end 