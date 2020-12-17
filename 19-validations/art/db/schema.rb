# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_17_210459) do

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.integer "death"
    t.string "nationality"
    t.string "known_for"
    t.integer "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.integer "curator_id", null: false
    t.integer "gallery_id", null: false
    t.integer "pay"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["curator_id"], name: "index_contracts_on_curator_id"
    t.index ["gallery_id"], name: "index_contracts_on_gallery_id"
  end

  create_table "curators", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "exhibitions", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.integer "gallery_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["gallery_id"], name: "index_exhibitions_on_gallery_id"
    t.index ["painting_id"], name: "index_exhibitions_on_painting_id"
  end

  create_table "galleries", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "painting_tags", force: :cascade do |t|
    t.integer "painting_id", null: false
    t.integer "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["painting_id"], name: "index_painting_tags_on_painting_id"
    t.index ["tag_id"], name: "index_painting_tags_on_tag_id"
  end

  create_table "paintings", force: :cascade do |t|
    t.string "name"
    t.integer "date_made"
    t.integer "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.index ["artist_id"], name: "index_paintings_on_artist_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "contracts", "curators"
  add_foreign_key "contracts", "galleries"
  add_foreign_key "exhibitions", "galleries"
  add_foreign_key "exhibitions", "paintings"
  add_foreign_key "painting_tags", "paintings"
  add_foreign_key "painting_tags", "tags"
  add_foreign_key "paintings", "artists"
end
