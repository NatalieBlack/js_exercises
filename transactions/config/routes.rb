Rails.application.routes.draw do
  root "transactions#home"
  get 'json_data', to: "transactions#index"
  get "new_sale", to: "transactions#new_sale"
  get "new_purchase", to: "transactions#new_purchase"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
