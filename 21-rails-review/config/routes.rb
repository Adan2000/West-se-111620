Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :bloggers, only: [:new, :show, :create]
  resources :posts, only: [:show, :create, :new, :edit, :update]
  resources :destination, only: [:show]

  patch '/posts/:id/add_likes', to: 'posts#add_likes', as:'add_likes'

end
