# Number of attacks per month
month_frequency = []
12.times {month_frequency << 0}

# Number of attacks by attack type
attack_types = Hash.new(0)

# Number of suicide attacks
suicide_attacks = 0
non_suicide_attacks = 0

# Country Name
country_name = ""

json.records @records.each do |record|
  json.partial!('api/records/records', record: record)
  month_frequency[record.imonth - 1] += 1
  attack_types[record.attacktype1_txt] += 1
  record.suicide ? suicide_attacks += 1 : non_suicide_attacks += 1
  country_name == "" ? country_name = record.country_txt : country_name
end

json.months month_frequency
json.attackTypes attack_types
json.suicideAttacks suicide_attacks
json.nonSuicideAttacks non_suicide_attacks
json.countryName country_name
