class User
    attr_accessor :name, :id

    @@all = []

    def initialize(id, name)
        @id = id
        @name = name
        @@all << self
    end

    def self.all
            # @@all
            sql = "SELECT * FROM users;"
            users = DB[:conn].execute(sql)
            users.map do |user| 
                User.new(user["id"], user["name"])
            end 
            # binding.pry
    end
        
end 