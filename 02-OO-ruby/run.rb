require 'pry'


class BankAccount 
    attr_reader :account_number
    # attr_writer :balance
    attr_accessor :balance, :user_name

    @@all = []

    def initialize(balance, account_number, user_name)
        @balance = balance
        @account_number = account_number
        @user_name = user_name
        @@all << self
    end 
    # #getter 
    # def balance 
    #     @balance
    # end 
    # #set
    # def balance=(new_balance)
    #     @balance = new_balance
    # end 

    def self.all
        @@all
    end 

  

    def print_balance
        puts self
        puts self.balance
        puts self.account_number
        puts self.user_name
        "Account #{@account_number} has a balance of #{self.balance}"
    end 

    def balance
        "$#{@balance}"
    end 

    def deposit(amount)
        @balance = @balance+amount
        self.print_balance
    end 

    def withdrawl(amount)
        @balance = @balance-amount
        self.print_balance
    end 
  

end 


acct1 = BankAccount.new(1001, "abc1234", 'rose')
acct2 = BankAccount.new(500, "abc999", 'ix')
binding.pry

BankAccount.new(530, "abc1111", 'Adam')
BankAccount.new(5000, "abc900", 'John')



binding.pry
0