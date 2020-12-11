Rails.application.routes.draw do
  resources :artists
  resources :paintings, only: [:index, :show]
  # resources :paintings
  
  get "/login", to:"paintings#login"
  # get "/paintings", to:"paintings#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
