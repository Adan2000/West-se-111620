class Tweet
    attr_accessor :message
    attr_reader :user_id, :id

    # @@all = []

    def initialize(id, message, user_id)
        @message = message
        @user_id = user_id
        @id = id 
        # @@all << self
    end

    def self.all
        # @@all
        sql = "SELECT * FROM tweets;"
        tweets = DB[:conn].execute(sql)
        tweets.map do |tweet| 
            Tweet.new(tweet["id"], tweet["message"], tweet["user_id"])
        end 
        # binding.pry
    end 

    def save
        # sql = "INSERT INTO tweets (message, user_id) VALUES('#{self.message}', '#{self.user_id}');"
       sql = "INSERT INTO tweets (message, user_id) VALUES(?,?);"

        DB[:conn].execute(sql, self.message, self.user_id)
    end 




end 