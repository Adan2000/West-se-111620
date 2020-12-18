class OrdersController < ApplicationController
    
    def show
        @order = Order.find(params[:id])
    end 
    
    def new
        @order = Order.new
        @customers = Customer.all
        @donuts = Donut.all
    end 

    def create
        @order = Order.create(order_params)
        if @order.valid?
            redirect_to @order
        else 
            flash[:errors] = @order.errors.full_messages
            redirect_to new_order_path
        end 
    end 

    private

    def order_params
        params.require(:order).permit(:time, :customer_id, :donut_id)
    end 

end
