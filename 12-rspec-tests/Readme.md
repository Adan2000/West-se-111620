# TestDrivenDevelopment 
## SWBAT
- Explain the need for testing in general
- Install RSpec in a project
- Define Test-Driven development
- Describe what a testing framework is and what the RSpec framework does
- Write tests for a basic function while considering entire problem space
- Describe the difference between failing, passing, and pending test cases
- Define assertions and matchers in the context of test cases
- Use output from a testing framework to guide their development


## Why are tests helpful?
- Check the behavior of your code -> arguments for methods and return value

## Using Unit Tests to Protect Ourselves 
- Unit tests provide us with a way to check all of the features of our code without having to do so manually
- A Unit tests allow us to test one feature at a time 



## Adding rspec
```
    rspec --init

```

## Writing rspec tests
[rspec method list](https://rspec.info/documentation/3.5/rspec-expectations/method_list.html)

```
describe "Hero Class" do 
    thor = Hero.new([ 
        {
            name: 'Super Strength',
            coolness: 3
        },
        {
            name:'Flight',
            coolness: 5
        },
        {
            name: 'Lighting Blast',
            coolness: 10
        }
    ])

    it "Should return its coolest ability" do
        expect( thor.coolest_ability ).to( eq({
            name: 'Lighting Blast',
            coolness: 10
        }))
    end 

end 



```

## Deliverables 
- Create a "Hero" Class
- Accepts an array of abilities
- Each ability will be represented by a hash with a name and  "coolness" rating
- Create a method which returns the heros coolest ability
- Create a method which returns the heros ability names ordered alphabetically
- Create method add_ability, which accepts an ability and adds it to the array