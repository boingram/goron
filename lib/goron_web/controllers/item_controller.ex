defmodule GoronWeb.ItemController do
  use GoronWeb, :controller

  def index(conn, _params) do
    items = []
    json(conn, items)
  end
end
