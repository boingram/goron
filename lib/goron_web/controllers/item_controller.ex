defmodule GoronWeb.ItemController do
  use GoronWeb, :controller

  alias Goron.Item

  def index(conn, _params) do
    items = Item.get_all_items()
    json(conn, items)
  end
end
