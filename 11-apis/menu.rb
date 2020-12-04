class Menu
    def start
        puts 'Hello'
        puts '1. search books'
        puts '2. exit'
        user_input = STDIN.gets.chomp
        self.input(user_input)
             
    end 

    def input(user_input)
        if user_input == "1"
            self.search
        else
            self.exit
        end 
    end 

    def search
        puts 'What book would you like to find?'
        user_input = STDIN.gets.chomp
        self.get_books(user_input)
    end 

    def get_books(user_input)
        response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{user_input}")
        json = JSON.parse(response.body)
        json["items"].each{|book| puts book["volumeInfo"]["title"]}
        puts "Hit any key to return to menu"
        user_input = STDIN.gets.chomp
        self.start
    end 

    def exit
        puts 'goodbye!'
    end 
end 