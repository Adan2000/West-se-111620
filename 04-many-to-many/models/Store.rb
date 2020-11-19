class Store 
    attr_reader :location
    attr_accessor :name
    @@all = []

    def initialize(name, location)
        @name = name
        @location = location
        @@all << self
    end 

    def self.all
        @@all
    end 

    def view_orders
        Order.all.select{|order| order.store == self}
    end 

    def inventory
        self.view_orders.map{|order| order.grocery_item.item_name }.uniq
    end 

    def total_inventory_cost
        # store_orders = Order.all.select{|order| order.store == self}
        # store_orders.sum{|order| order.grocery_item.price * order.amount}
        self.view_orders.sum{|order| order.grocery_item.price * order.amount}
    end 

    def amount_of_item(item)
        item_orders = self.view_orders.select{|order|order.grocery_item == item}
        item_orders.sum{|order| order.amount}
    end 

   

end 
