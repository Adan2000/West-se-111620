class StoresController < ApplicationController

get "/stores" do
    @stores = Store.all
    erb :"/stores/index"
end

get "/stores/new" do
    erb :"/stores/new"
end

get "/stores/:id" do 
    @store = Store.find(params["id"])
    erb :"/stores/show"
end 

get "/stores/edit/:id" do 
   @store = Store.find(params["id"])
   erb :"stores/edit"
end 

post "/stores" do
    store = Store.create(params)
    redirect to "/stores/#{store.id}"
end 

patch "/stores/:id" do 
    store = Store.find(params["id"])
    store.update(name:params["name"], location:params["location"])
    redirect to "/stores/#{store.id}"
end 

end
