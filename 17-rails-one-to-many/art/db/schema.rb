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

ActiveRecord::Schema.define(version: 2020_12_17_164919) do

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "death"
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

  create_table "create_contracts", force: :cascade do |t|
    t.integer "curator_id", null: false
    t.integer "gallery_id", null: false
    t.integer "pay"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["curator_id"], name: "index_create_contracts_on_curator_id"
    t.index ["gallery_id"], name: "index_create_contracts_on_gallery_id"
  end

  create_table "create_curators", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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

  create_table "paintings", force: :cascade do |t|
    t.string "name"
    t.integer "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.index ["artist_id"], name: "index_paintings_on_artist_id"
  end

  add_foreign_key "contracts", "curators"
  add_foreign_key "contracts", "galleries"
  add_foreign_key "create_contracts", "curators"
  add_foreign_key "create_contracts", "galleries"
  add_foreign_key "exhibitions", "galleries"
  add_foreign_key "exhibitions", "paintings"
  add_foreign_key "paintings", "artists"
end
