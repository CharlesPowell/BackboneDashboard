require 'bundler'
Bundler.require()

require './models/card.rb'

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'cards_db'
)

get '/' do
  erb :index
end

get '/api/cards' do
  content_type :json
  cards = Card.all
  cards.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id])
  card.to_json
end

post '/api/cards' do
  content_type :json
  newCard = Card.create(params[:card])
end

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id])
  card.update(params[:card])
end

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id])
  card.update(params[:card])
end

delete '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id])
  card.destroy
end
