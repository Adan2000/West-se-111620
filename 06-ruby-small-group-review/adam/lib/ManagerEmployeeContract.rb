class ManagerEmployeeContract
    attr_reader :start_date, :manager, :employee
    @@all = []
    def initialize(date, manager, employee)
        @start_date = date
        @manager = manager
        @employee = employee
        @@all << self
    end
    def self.all
        @@all
    end

    
end 