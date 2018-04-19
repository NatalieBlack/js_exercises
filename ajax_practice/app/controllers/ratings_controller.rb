class RatingsController < ApplicationController
  def create
    @rating = Rating.create(rating_params)
    render json: @rating
  end

  private
  def rating_params
    params.require(:rating).permit(:stars, :post_id)
  end
end
