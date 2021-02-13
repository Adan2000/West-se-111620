Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :paintings
      post '/sign_up', to: 'users#create'
      post '/login', to: 'auth#create'
      get '/persist', to: 'auth#show'
    end
  end
end
