records = []

json.records @records.each do |record|
  json.partial!('api/records/records', record: record)
  records << record
end

# Number of attacks per city
unique_cities = records.uniq{|record| record.city}

city_frequency = Hash.new(0)
unique_cities.each {|city| city_frequency[city.city] += 1}

json.cities = city_frequency
