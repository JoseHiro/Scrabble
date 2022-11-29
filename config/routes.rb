Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # # root "articles#index"

  root to: "games#home"
  get "/scrabble", to: "games#scrabble"
  # get "/scrabble", to: "scrabbles#start"
end
