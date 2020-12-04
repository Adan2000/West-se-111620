class Hero
    
    attr_accessor :abilities
    def initialize(abilities)
        @abilities = abilities
    end

    def coolest_ability
        @abilities.max{|ability| ability[:coolness]}
    end 

    def add_ability(ability)
        if(ability.class == Hash) 
            @abilities << ability
        end
    end 

end