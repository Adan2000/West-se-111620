class Contract
    attr_reader :employee, :manager, :start_date
    
    @@all = []
    def initialize(employee, manager, start_date)
        @employee = employee
        @manager = manager
        @start_date = start_date
        @@all << self
    end

    def self.all
        @@all
    end 
end 