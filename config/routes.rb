Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  root "welcome#index"

  namespace :admin do
    get 'index', :to => "home#index", as: 'dashboard'

   
    #resources :products
  
    
    
  end
  
end
