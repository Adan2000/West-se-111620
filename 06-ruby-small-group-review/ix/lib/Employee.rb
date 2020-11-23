class Employee
   attr_accessor :name, :salary
    
    @@all = []
    def initialize(name, salary)
        @name = name
        @salary = salary.to_f
        
        @@all << self
    end

    def self.all
        @@all
    end 

    def contracts
        Contract.all.select{|contract| contract.employee == self}
    end 

    def manager_names
        self.contracts.map{|contract| contract.manager.name}
    end 

    def self.paid_over(num)
        @@all.select{|employee| employee.salary > num}
    end 

    def self.find_by_department(department)
        Contract.all.find{|contract| contract.manager.department == department }.employee
    end 

    def tax_bracket 
        @@all.select{|employee| employee.salary > (self.salary-1000) && employee.salary < (self.salary+1000)}
    end 

    def self.total
        @@all.length
    end 

end
