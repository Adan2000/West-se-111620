Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resources :responses

  resources :log_in, only: [:new, :create]
  delete "logout", to: "log_in#destroy", as: "log_out"

  get :'random-question', to: 'responses#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
