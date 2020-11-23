class Manager
    attr_accessor :name, :department, :age

    @@all = []
    def initialize(name, department, age)
        @name = name
        @department = department
        @age = age
        @@all << self
    end

    def self.all
        @@all
    end 

    def self.all_departments 
        @@all.map{|manager| manager.department}.uniq
    end 

    def hire_employee(employee, start_date)
        Contract.new(employee, self, start_date)
    end 

    def contracts
        Contract.all.select{|contract| contract.manager == self}
    end 

    def employees
        self.contracts.map{|contract| contract.employee}
    end 

    def self.average_age
        @@all.sum{|manager| manager.age} / @@all.length.to_f

    end 


end
