require 'csv'
require 'charlock_holmes/string'

namespace :db do
  desc "Import data from CSV"
  task :import_data => :environment do
    csv_text = File.read('data_min.csv', :encoding => 'Windows-1256:utf-8')
    # if !csv_text.is_utf8?
    #   detection = CharlockHolmes::EncodingDetector.detect(csv_text)
    #   utf8_encoded_content = CharlockHolmes::Converter.convert csv_text, detection[:encoding], 'UTF-8'
    #   csv_text = utf8_encoded_content
    # end
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      Record.create!(row.to_hash)
    end
  end
end
