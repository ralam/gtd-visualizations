class Api::RecordsController < ApplicationController
  def index
    if params['year'] && params['country']
      @records = Record.where({iyear: params['year'], country_txt: params['country']})
    elsif params['year']
      @records = Record.where({iyear: params['year']})
    elsif params['country']
      @records = Record.where({country_txt: params['country']})
    else
      @records.limit(100)
    end
  end
end
