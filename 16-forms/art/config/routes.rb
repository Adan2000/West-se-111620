Rails.application.routes.draw do
  resources :paintings
  resources :artists, only: [:index, :show, :edit, :update, :new, :create,]

  # get "/artists", to:"artists#index"
  get "rose", to:"artists#rose", as:"rose"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
