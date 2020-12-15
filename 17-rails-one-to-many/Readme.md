# Rails Associations 
## SWBAT
- Refresher on has_many and belongs_to
- Use Rails form helper methods that create an associated object
- Implement collection_select for models that require a foreign key
- Implement dependent: :destroy in order to destroy associated objects to normalize database
- Implement a before action 


![one to many](https://guides.rubyonrails.org/images/association_basics/belongs_to.png "one to many")

## collection_select 

```
    <%= f.collection_select :artist_id, @artists, :id, :name%> 

    <select name="painting[artist_id]">
        <option value="1" >Vincent van Gogh</ value="1" >
        <option value="2" >Frida Kahlo</option>
        <option value="3" >Claude Monet</option>
    </select> 

```

## dependent: :destroy

```
class Artist < ApplicationRecord
    has_many :paintings, dependent: :destroy 
end

```

## before_action 

```
class PaintingsController < ApplicationController
    before_action :set_painting, only: [:show, :edit, :update, :destroy]

    private 

    def set_painting
      @painting = Painting.find(params[:id])
    end
end

```