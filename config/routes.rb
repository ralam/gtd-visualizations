Rails.application.routes.draw do

  root to: 'static_pages#index'

  resources :static_pages, only: [:index]
  namespace :api, defaults: {format: 'json'}  do
    resources :records, only: [:index]
  end
end
