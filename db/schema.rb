# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151125010812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "records", force: :cascade do |t|
    t.integer  "iyear",              null: false
    t.integer  "imonth",             null: false
    t.integer  "iday",               null: false
    t.string   "approxdate"
    t.boolean  "extended"
    t.string   "resolution"
    t.integer  "country",            null: false
    t.string   "country_txt",        null: false
    t.integer  "region",             null: false
    t.string   "region_txt",         null: false
    t.string   "provstate"
    t.string   "city"
    t.float    "latitude"
    t.float    "longitude"
    t.integer  "specificity"
    t.integer  "vicinity"
    t.string   "location"
    t.string   "summary"
    t.string   "alternative_txt"
    t.boolean  "success",            null: false
    t.boolean  "suicide",            null: false
    t.integer  "attacktype1",        null: false
    t.string   "attacktype1_txt",    null: false
    t.integer  "targtype1",          null: false
    t.string   "targtype1_txt",      null: false
    t.integer  "targsubtype1"
    t.string   "targsubtype1_txt"
    t.string   "corp1"
    t.string   "target1"
    t.string   "natlty1"
    t.string   "natlty1_txt"
    t.string   "gname",              null: false
    t.string   "motive"
    t.integer  "nperps"
    t.integer  "nperpcap"
    t.boolean  "claimed"
    t.integer  "weaptype1",          null: false
    t.string   "weaptype1_txt",      null: false
    t.integer  "weapsubtype1"
    t.string   "weapsubtype1_txt"
    t.string   "weapdetail"
    t.integer  "nkill"
    t.integer  "nkillus"
    t.integer  "nkillter"
    t.integer  "nwound"
    t.integer  "nwoundus"
    t.integer  "nwoundte"
    t.integer  "property"
    t.integer  "propextent"
    t.string   "propextent_txt"
    t.string  "propvalue"
    t.string   "propcomment"
    t.boolean  "ishostkid"
    t.integer  "nhostkid"
    t.integer  "nhostkidus"
    t.integer  "nhours"
    t.integer  "ndays"
    t.boolean  "ransom"
    t.integer  "ransomamt"
    t.integer  "ransompaid"
    t.integer  "hostkidoutcome"
    t.string   "hostkidoutcome_txt"
    t.integer  "nreleased"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "records", ["attacktype1_txt"], name: "index_records_on_attacktype1_txt", using: :btree
  add_index "records", ["country_txt"], name: "index_records_on_country_txt", using: :btree
  add_index "records", ["gname"], name: "index_records_on_gname", using: :btree
  add_index "records", ["iyear"], name: "index_records_on_iyear", using: :btree
  add_index "records", ["targtype1_txt"], name: "index_records_on_targtype1_txt", using: :btree
  add_index "records", ["weaptype1_txt"], name: "index_records_on_weaptype1_txt", using: :btree

end
