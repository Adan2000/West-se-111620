class Character < ActiveRecord::Base
    belongs_to :player
    belongs_to :campaign

    def find_spell(spell)
        res = GetRequester.new("https://www.dnd5eapi.co/api/spells/#{spell}/")
        spell_data = res.parse_json
        puts  "name: #{spell_data["name"]}"
        puts  "range: #{spell_data["range"]}"
        puts  "components: #{spell_data["components"]}"
        puts  "duration: #{spell_data["duration"]}"

    end 
end 