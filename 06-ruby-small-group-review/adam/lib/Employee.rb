class Employee
#name, salary
    attr_reader :name
    attr_writer :salary
    @@all = []
    def initialize(name, salary)
        @name = name
        @salary = salary
        @@all << self
    end
    def self.all
        @@all
    end
    def salary
        @salary.to_f
    end

    def contracts
        ManagerEmployeeContract.all.select {|mec| mec.employee == self}
    end

    def manager_names
        self.contracts.map {|c| c.manager.name} 
    end

    def tax_bracket
        # returns an Array of all the employees whose salaries are 
        # within $1000 (± 1000) of the employee who invoked the method
        Employee.all.select {|e| 
            e.salary < self.salary + 1000 || e.salary > self.salary - 1000
        }
    end


    def self.paid_over(salary)
        Employee.all.select {|e| e.salary > salary}
    end

    def self.find_by_department(dept)
        ManagerEmployeeContract.all.find {|mec| 
            mec.manager.department == dept
        }.employee
    end


end
