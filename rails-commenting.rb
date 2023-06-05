# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) A class is defined which serves as a controller to handle blog posts
class BlogPostsController < ApplicationController
  def index
    # ---2) Index method is defined which retrieves all blog posts from the database. Assigns them to @posts
    @posts = BlogPost.all
  end

  # ---3) A method is defined to retrieve specific blog posts based on id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) A method is defined to initialize new BlogPost object and assign it to @post. Used to render a form.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Method to create a blog post using data from form. If the blog post is valid and successfully created the user is redirected.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Method used to retrieve exsisting blog post based on id and renders a form to edit exsisting post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Method to update @post object passing the blog_post_params. If successful the user is redirected to blog_post_path for the updated post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Method to retrieve and destroy blog post based on id. If successful redirected to the index page to see updated list.
      redirect_to blog_posts_path
    end
  end

  # ---9) Private keyword user to indicate methods below are private and can only be accessed withith the scope of the BlogPostsController class.
  private
  def blog_post_params
    # ---10) Encapsulates permitted parameters for updating blog posts. Uses params to retrieve the blog_post parameter, then calls permit to specifiy attributes title and content and allowed to be mass assigned. 
    params.require(:blog_post).permit(:title, :content)
  end
end
