# SWBAT
## Inheritance 
- [] Review how to inherit from a parent class
- [] Review what `super` is doing
- [] Review the look up chain
- [] Investigate `self`
- [] Understand how to read test errors
## SQL
- [] Review do we need SQL
- [] Explain what SQL is
- [] Utilize SQLite Browser


## Why Inheritance
- DRY, don't repeat yourself 
- reusable code
- sharing functionality between classes 

## How does Ruby use Inheritance?
```
''.methods
# brings us all the method a string has 
String.ancestors
#  [String, Comparable, Object, PP::ObjectMixin, Kernel, BasicObject]
# these are all the classes a String inherited from

Cat.ancestors
# [Cat, Animal, Object, RequireAll, PP::ObjectMixin, Kernel, BasicObject
Since dog inherits from Animal we can see it in its ancestors 

Cat.superclass
#Animal

```



## ruby gems 
- https://rubygems.org

```
config/environment.rb 
require 'bundler/setup'
Bundler.require
require_rel '../app'

run.rb
require_relative './config/environment.rb'


```
## SQL
- How have we persisted data?
- @@all 
    - only exists while we are running our pry
    - easy to delete 
    - not efficient, hard go through 
    - doesn't scale well
- What is a relational DB
    - row and columns
    - different tables that are related with a primary and foreign keys
        - Primary Key: uniquely identifies each record in a table
        - Foreign Key: Link tables together, a foreign key in one table is the primary key in the other 

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;  
```

2. Write the SQL to select the artist with the name 'Black Sabbath'

```SQL
SELECT * FROM artists WHERE name  = 'Black Sabbath';
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql

INSERT INTO fans (name, artist_id) VALUES ('Rob Cobb', 169)


```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql
    UPDATE fans 
    SET name = 'Billy Bob'
    WHERE name = 'Rob Cobb';
```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
    SELECT * FROM fans WHERE artist_id != 169;
```

8. Write the SQL to display an artists name next to their album title

```sql
   SELECT name, title FROM artists 
   JOIN albums 
   ON albums.artist_id = artists.id

```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql
    SELECT artists.name as artists, COUNT(tracks.name) as track_count, title as album_title 
    FROM artists 
    JOIN albums
    ON albums.artist_id = artists.id
    JOIN tracks 
    ON tracks.album_id = albums.id
    GROUP BY albums.id

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql
    SELECT DISTINCT artists.name FROM artists
    JOIN albums 
    ON albums.artist_id = artists.id
    JOIN tracks
    ON tracks.album_id = albums.id
    JOIN genres
    ON tracks.genre_id = genres.id
    WHERE genres.name = 'Pop';

```


