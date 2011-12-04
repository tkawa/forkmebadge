# coding: utf-8
require 'sinatra'
require 'sinatra/reloader' if development?
require 'omniauth'

ENV['RACK_ENV'] ||= 'development'
configure do
  Mongoid.load!('./mongoid.yml')
end

enable :sessions

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

use OmniAuth::Builder do
  #provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
  provider :github, 'a00008e68e9e9fcdbba5', 'ff1e60120c214d14533187a856ff73adf21feeff'
end

get '/' do
  erb :index
end

get '/auth/github/callback' do
  @auth = request.env['omniauth.auth']
  erb :index
end
