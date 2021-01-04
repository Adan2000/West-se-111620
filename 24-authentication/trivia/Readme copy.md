# Auth in Rails

![](https://media.giphy.com/media/y0s36prnnGb5u/giphy.gif)

## Objectives

- Understand, theoretically, how authentication and authorization work
  - Understand the _difference_ between authentication and authorization and how they fit under the umbrella topic
    _auth_
- Discuss different encryption and hashing schemes, and `bcrypt` specifically
  - Do we want to ever store plaintext user passwords? (no)
- Augment a user model in rails using `bcrypt`, `password_digest`, and `has_secure_password`
- Build User sign up and sign in flows in Rails
- Review sessions and cookies, as well as implement sign up, log in, and log out

## Steps

### How does auth work in theory?

##### What is the difference between sign-in and sign up?

Sign-up happens once, and afterwards the information that is used to authenticate a user exists in the system for
sign-in.

Sign-up corresponds to _creating_ a new user. Sign-in is authenticating an already existing user with some identifying
piece of information.

##### What is authentication?

It boils down to a really interesting question: _Are you who you say you are?_ And we use the username/password as a
proxy for that. This is called [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication):
a method for confirming a user's identity via multiple pieces (factors) of identification, such as a username/password
that only the user has. Ideally, our users provide unique passwords for each site they sign up for and don't use
[common passwords](https://www.huffingtonpost.com/entry/2016-most-common-passwords_us_587f9663e4b0c147f0bc299d), but
that's not always the case.

##### What is the difference between Authentication and Authorization?

Authorization happens after authentication. It's about scope, and specific information. _What is the user allowed to
see/interact with?_; what is the user **authorized** to see? Simply proving your identity does not mean you have
unlimited power or authority; providing my driver's license to the TSA may prove my identity but it doesn't mean I'm
**authorized** to fly the plane.

![POWER! UNLIMITED POWER](https://media.giphy.com/media/xUA7ba9aksCuKR9dgA/giphy.gif)

---

##### How do passwords work?

Do websites save our passwords? And if they do, how are they stored? Should a plaintext password ever be stored?

##### What is the difference between hashing and encrypting?

Encryption lets us turn some string of information into another, random-looking string. That's it - it just garbles the information. 'Good' encryption has two key properties.

1. No one can tell what was in the original message. (No one without the secret key, that is!)
2. No one can change the information in the encrypted message.

These are called security against _eavesdropping_ and _tampering_, respectively.

Hashing is a little different: the ultimate goal of one-way hashing is that it cannot be feasibly reversed. Like putting something through a meat grinder or a paper shredder, we cannot reverse the process. This means that no one, not even those doing the hashing, are able to reverse the process.
Hiding this information from ourselves is good. Having access to the actual passwords is a dangerous liability! If someone had access to our database, then they would have the passwords associated with lots of email addresses, which would mean they could steal a ton of people's identities. People are bad at using new passwords for each website, so your password database likely contains people's gmail passwords!

[Rainbow Tables](https://www.geeksforgeeks.org/understanding-rainbow-table-attack/)

![](https://media.giphy.com/media/fcaN0b9yGcwbm/giphy.gif)

---



## External Resources:

- [Multi-factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)
- [Huffington Post List of Common Passwords](https://www.huffingtonpost.com/entry/2016-most-common-passwords_us_587f9663e4b0c147f0bc299d)
- [BCrypt gem on github](https://github.com/codahale/bcrypt-ruby#why-you-should-use-bcrypt)
- [BCrypt Password class source code](https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb#L23)
- [Rails Docs on security](https://guides.rubyonrails.org/security.html#sessions)
- [Rails Docs on has_and_belongs_to_many](https://guides.rubyonrails.org/association_basics.html#the-has-and-belongs-to-many-association)

*What is authentication vs Authorization
*Authentication comes before authorization 
*Authentication is who you are
*Authorization is what you can do

*Here's our app so far
*we've added a user_id responces so we can track which users have answered which questions 
*we have added password_digest, why is it password_digest in stead of just password?
- not actually the password itself, it's a hashed version of the users password.
- why might we not want to store a users password in our db?
- have you ever pressed 'cant remember my password' and gotten 
your password back?
- hopefully no
- The passwords in a computer system are not stored directly as plain texts, but are hashed using encryption. 
- A rainbow table is a database that is used to gain authentication by cracking the password hash. 
- It is a precomputed dictionary of plaintext passwords and their corresponding hash values that can be used to find out what plaintext password produces a particular hash. Since more than one text can produce the same hash, it’s not important to know what the original password really was, as long as it produces the same hash.

- meat grinder 
  - can you put a cow back togethre from ground beef
  - can you still tell that  ground beef is from a cow?
- This is what we do to your passwords
  - we grind them up so we cant figure out what they were in the first place and store that.
  - when you log in we take what you entered into for your password, we grind it again and test it against the ground meat in our database and see if it's the same kind
- you put the same thing in twice, you get the same result 
- is it cow or not

demo:
bundle install bcrypt 
2.6.1 :001 > BCrypt
2.6.1 :002 > BCrypt::Password
- BCrypt is the library we will be using, password is the class on that library
2.6.1 :003 > bcrypt_password = BCrypt::Password.create("cow")
2.6.1 :005 > bcrypt_password.class
2.6.1 :006 > bcrypt_password.class.ancestors
- does not save anything to the db on its own
- it creates a bcrypt password object takes the password and runs it through the meat grinder
- this password object is a string.
- https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb

2.6.1 :007 > bcrypt_password.salt

- show all of the most popular password
- salting adds a little bit of extra information 
- to help differ your password from someone else who chose the same password.
- salt is stored in the db with the hash password
  - think of it as seasoning that's being thrown on your meat

2.6.1 :010 > bcrypt_password == "cow"
2.6.1 :011 > bcrypt_password == "chicken"
- == is very specal in bcryped 
- they monkeypached == to be a method in bcrypt that hashes the password before comparing it
- https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb
- line 65

2.6.1 :012 > BCrypt::Password.new("$2a$12$VYgIzcDXtNyGUH/.6bhbWeYnzerLihlz.OYg6h1inAoZYH3uepN4O") == "cow"
- create > creates a new instance of a hash
- new > creates a new hash instance based on the value of a string
- double equals verifys a hash instances is equal to a plane text string.