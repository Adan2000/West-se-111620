Rails.application.routes.draw do
  resources :responses
  get :'random-question', to: 'responses#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
