require 'bundler'
Bundler.require()

require './models/card.rb'

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'cards_db'
)

# Helparino
def card_params
  request_body = JSON.parse(request.body.read.to_s)
  {title: request_body["title"], message: request_body["message"]}
end

get '/' do
  erb :index
end

get '/variables' do
  erb :variables
end

get '/api/cards' do
  cards = Card.all
  content_type :json
  cards.to_json
end

get '/api/cards/:id' do
  card = Card.find(params[:id].to_i)
  content_type :json
  card.to_json
end

post '/api/cards' do
  newCard = Card.create(card_params)
  content_type :json
  newCard.to_json
end

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[card_params])
end

put '/api/cards/:id' do
  request_body = JSON.parse(request.body.read.to_s)
  card = Card.find(params[:id].to_i)
  card.update(params[card_params])
end

delete '/api/cards/:id' do
  #content_type :json
  request_body = JSON.parse(request.body.read.to_s)
  card = Card.find(params[:id].to_i)
  card.destroy
end
