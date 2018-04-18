class UsersController < ApplicationController
  def new
    @user = User.new(admin: false)
    @admin = User.new(admin: true)
  end

  def create
    @user = User.create(user_params)
    if @user.save
      respond_to do |format|
        format.json do
          render json: @user
        end
      end
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:admin, :name, :email)
  end
end
