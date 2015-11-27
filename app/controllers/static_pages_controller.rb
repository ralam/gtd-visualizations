class StaticPagesController < ApplicationController
  def index
    @countries = Record.uniq.pluck(:country_txt)
    @years = Record.uniq.pluck(:iyear)
  end
end
