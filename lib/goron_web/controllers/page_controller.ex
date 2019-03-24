defmodule GoronWeb.PageController do
  use GoronWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
