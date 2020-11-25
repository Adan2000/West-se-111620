class Dog < Animal

    def initialize(name,mood, is_good_dog = 'yes')
        super(name,mood)
        @is_good_dog = is_good_dog
    end 

    # def self.all 
    #     @@all.select{|animal| animal.class == self}
    # end 


    def speak
        
        puts  'arff boofff'
    end

end 