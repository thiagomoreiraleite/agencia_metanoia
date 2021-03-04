Rails.application.routes.draw do
  devise_for :users
  root to: 'contacts#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :contacts, only: [:new, :create]
   
end
