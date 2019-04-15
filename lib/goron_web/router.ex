defmodule GoronWeb.Router do
  use GoronWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL, schema: GoronWeb.Schema, json_codec: Jason
    forward "/", Absinthe.Plug, schema: GoronWeb.Schema, json_codec: Jason
  end

  scope "/", GoronWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
