defmodule GoronWeb.Resolvers.AreaResolverTest do
  use GoronWeb.ConnCase

  describe "Area Resolver" do
    test "list_areas/3 returns all items", %{conn: conn} do
      query = """
      {
        areas {
          name 
          locations {
            id
            name
            area
            accessible
            visited
          }
        }
      }
      """

      resp =
        conn
        |> post("/api", %{query: query})
        |> json_response(200)

      areas = resp["data"]["areas"]
      assert length(areas) > 0
      assert Enum.all?(areas, &validate_area(&1))

      locations =
        areas
        |> Enum.map(& &1["locations"])
        |> List.flatten()

      assert Enum.all?(locations, &validate_location(&1))
    end
  end

  def validate_area(area) do
    assert area["name"] != ""
    assert length(area["locations"]) > 0
  end

  def validate_location(location) do
    assert location["id"] != nil
    assert location["name"] != ""
    assert location["area"] != ""
    assert !location["visited"]
  end
end
