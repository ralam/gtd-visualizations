json.records @records.each do |record|
  json.partial!('api/records/records', record: record)
end
