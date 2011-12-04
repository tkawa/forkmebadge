# coding: utf-8
require 'sinatra'
require 'sinatra/reloader' if development?

ENV['RACK_ENV'] ||= 'development'
configure do
  Mongoid.load!('./mongoid.yml')
end

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

get '/styles.css' do
  scss :styles
end

get '/script.js' do
  coffee :script
end

get '/' do
  erb :index
end
