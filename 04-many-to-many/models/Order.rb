class Order
    # attr_reader :store, :grocery_item
    attr_accessor :amount, :store, :grocery_item
    @@all = []
    def initialize(amount, store, grocery_item)
        @amount = amount
        @store  = store
        @grocery_item = grocery_item
        @@all << self
    end 

    def self.all
        @@all
    end 

end 