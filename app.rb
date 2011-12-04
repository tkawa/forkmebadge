# coding: utf-8
require 'sinatra'
require 'sinatra/reloader' if development?
require 'active_record'
require 'sinatra/activerecord'

ENV['RACK_ENV'] ||= 'development'

enable :sessions

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

use OmniAuth::Builder do
  #provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
  provider :github, 'a00008e68e9e9fcdbba5', 'ff1e60120c214d14533187a856ff73adf21feeff'
end

class User < ActiveRecord::Base
  def self.create_with_omniauth(auth)
    create! do |u|
      u.name = auth['info']['name']
      u.screen_name = auth['info']['nickname']
      u.uid = auth['uid']
      u.image = "" # auth['info']['image'] # 取れない？
      u.provider = auth['provider']
      u.token = auth['credentials']['token']
      u.secret = "" # auth['credentials']['secret']
    end
  end
end

get '/' do
  if session[:user_id]
    @user = User.find(session[:user_id])
  end
  erb :index
end

get '/auth/github/callback' do
  auth = request.env['omniauth.auth']
  user = User.find_by_provider_and_uid(auth['provider'], auth['uid']) || User.create_with_omniauth(auth)
  session[:user_id] = user.id
  #flash[:notice] = 'Signed in.'
  redirect '/'
end
