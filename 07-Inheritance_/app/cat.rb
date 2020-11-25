class Cat < Animal

    def initialize(name, lives = 9)
        super(name)
        @lives = lives
    end 

    # def self.all 
    #     @@all.select{|animal| animal.class == self}
    # end 

    def speak
        super
        puts 'SCREEEEEEEEEEEEEEEEM'
    end 

    def sleep_all_day
        'zzzzzzzzz'
    end 

end 