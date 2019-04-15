defmodule GoronWeb.Resolvers.ItemResolverTest do
  use GoronWeb.ConnCase

  describe "Item Resolver" do
    test "list_items/3 returns all items", %{conn: conn} do
      query = """
      {
        items {
          id 
          name
          image 
          selected
        }
      }
      """

      resp =
        conn
        |> post("/api", %{query: query})
        |> json_response(200)

      data = resp["data"]
      assert length(data["items"]) > 0
      assert Enum.all?(data["items"], &validate_item(&1))
    end
  end

  def validate_item(item) do
    assert item["id"] != ""
    assert item["name"] != ""
    assert item["image"] != ""
    assert !item["selected"]
  end
end
