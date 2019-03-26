defmodule GoronWeb.ItemControllerTest do
  use GoronWeb.ConnCase

  test "index/2 responds with all items", %{conn: conn} do
    response =
      conn
      |> get(Routes.item_path(conn, :index))
      |> json_response(200)

    assert Enum.all?(response, fn item ->
             item["id"] != nil && item["name"] != "" && !item["selected"]
           end)
  end
end
