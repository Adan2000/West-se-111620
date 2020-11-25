class Animal 
    attr_reader :name
    attr_accessor :mood
    @@all = []
    def initialize(name, mood="nervous")
        @name = name
        @mood = mood
        @@all << self
    end 
    
    def self.all
        self == Animal ? @@all : @@all.select{|animal| animal.class == self}
    end 

    def speak
        puts 'This animal speaks like this:'
    end 
end 