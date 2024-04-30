Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }

  get 'messages/new'
  get 'messages/create'

  resources :rooms do
    resources :messages
  end

  root "rooms#index"
end
