records = []

json.records @records.each do |record|
  json.partial!('api/records/records', record: record)
  records << record
end

# Number of attacks per city
city_frequency = Hash.new(0)
records.each {|city| city_frequency[city.city] += 1}

json.cities = city_frequency

# Number of attacks by attack type
attack_types = Hash.new(0)
records.each {|record| attack_types[record.attacktype1_txt] += 1}

json.attackTypes = attack_types
