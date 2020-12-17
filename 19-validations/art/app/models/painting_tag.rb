class PaintingTag < ApplicationRecord
    belongs_to :painting 
    belongs_to :tag
end
