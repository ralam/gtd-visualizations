# class CreateRecords < ActiveRecord::Migration
#   def change
#     create_table :records do |t|
#       t.integer :iyear, null: false
#       t.integer :imonth, null: false
#       t.integer :iday, null: false
#       t.string :approxdate
#       t.boolean :extended
#       t.string :resolution
#       t.integer :country, null: false
#       t.string :country_txt, null: false
#       t.integer :region, null: false
#       t.string :region_txt, null: false
#       t.string :provstate
#       t.string :city
#       t.float :latitude
#       t.float :longitude
#       t.integer :specificity
#       t.integer :vicinity
#       t.string :location
#       t.string :summary
#       t.string :alternative_txt
#       t.boolean :success, null: false
#       t.boolean :suicide, null: false
#       t.integer :attacktype1, null: false
#       t.string :attacktype1_txt, null: false
#       t.integer :targtype1, null: false
#       t.string :targtype1_txt, null: false
#       t.integer :targsubtype1
#       t.string :targsubtype1_txt
#       t.string :corp1
#       t.string :target1
#       t.string :natlty1
#       t.string :natlty1_txt
#       t.string :gname, null: false
#       t.string :motive
#       t.integer :nperps
#       t.integer :nperpcap
#       t.boolean :claimed
#       t.integer :weaptype1, null: false
#       t.string :weaptype1_txt, null: false
#       t.integer :weapsubtype1
#       t.string :weapsubtype1_txt
#       t.string :weapdetail
#       t.integer :nkill
#       t.integer :nkillus
#       t.integer :nkillter
#       t.integer :nwound
#       t.integer :nwoundus
#       t.integer :nwoundte
#       t.integer :property
#       t.integer :propextent
#       t.string  :propextent_txt
#       t.string :propvalue
#       t.string :propcomment
#       t.boolean :ishostkid
#       t.integer :nhostkid
#       t.integer :nhostkidus
#       t.integer :nhours
#       t.integer :ndays
#       t.boolean :ransom
#       t.integer :ransomamt
#       t.integer :ransompaid
#       t.integer :hostkidoutcome
#       t.string :hostkidoutcome_txt
#       t.integer :nreleased
#       t.timestamps null: false
#     end
#
#     add_index :records, :iyear
#     add_index :records, :country_txt
#     add_index :records, :attacktype1_txt
#     add_index :records, :targtype1_txt
#     add_index :records, :gname
#     add_index :records, :weaptype1_txt
#   end
# end

class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.integer :iyear, null: false
      t.integer :imonth, null: false
      t.string :country_txt, null: false
      t.boolean :suicide, null: false
      t.string :attacktype1_txt, null: false
      t.timestamps null: false
    end

    add_index :records, :iyear
    add_index :records, :country_txt
  end
end
