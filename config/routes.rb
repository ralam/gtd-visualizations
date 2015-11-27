Rails.application.routes.draw do

  resources :static_pages, only: [:index]
  namespace :api, defaults: {format: 'json'}  do
    resources :records, only: [:index]
  end
end
