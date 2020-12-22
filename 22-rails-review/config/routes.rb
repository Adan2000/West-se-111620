Rails.application.routes.draw do
  resources :ingredients, only: [:index]
  resources :recipes, only: [:index, :new, :create, :show, :edit, :update]
  resources :users, only: [:show, :destroy]

  get "recipes/low_high", to: "recipes#sort_low_high", as: "sort_low_high"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
