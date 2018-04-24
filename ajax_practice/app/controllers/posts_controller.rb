class PostsController < ApplicationController
  def index
    @posts = Post.all
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    render partial: "post", locals: {post: @post}
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
