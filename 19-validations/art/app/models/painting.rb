class Painting < ApplicationRecord
  belongs_to :artist

  has_many :painting_tags
  has_many :tags, through: :painting_tags

  accepts_nested_attributes_for :tags

  validate :painting_date

  def painting_date
    if self.date_made.to_i > self.artist.death.to_i || self.date_made.to_i < (self.artist.death.to_i - self.artist.age.to_i)
      errors.add(:date_made, "The artist was not alive during this year")
    end 
  end 

end
