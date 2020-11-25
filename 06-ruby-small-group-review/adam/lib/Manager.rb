require 'pry'
class Manager
    attr_reader :name, :department
    attr_writer :age
    attr_accessor :salary
    @@all = []
    def initialize(name, salary, department, age)
        @name = name
        @department = department
        @age = age
        @salary = salary
        @@all << self
    end
    def self.all
        @@all
    end

    def age
        @age.to_f
    end

    def contracts
        ManagerEmployeeContract.all.select {|mec| mec.manager == self}
    end

    def employees
        self.contracts.map {|c| c.employee}
    end
    
    def hire_employee(start_date, employee)
        ManagerEmployeeContract.new(start_date, self, employee)
    end


    def self.all_departments
        Manager.all.map {|m| m.department}.uniq
    end

    def self.average_age
        ages = Manager.all.map {|m| m.age}
        ages.sum / ages.size
    end
end
