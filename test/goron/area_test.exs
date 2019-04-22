defmodule Goron.AreaTest do
  use ExUnit.Case

  alias Goron.Area

  test "all the locations have the basic fields" do
    areas = Area.get_all_areas()

    # we got back areas
    assert length(areas) > 0

    # all of the areas had a name
    assert Enum.all?(areas, &(&1.name != ""))

    locations =
      areas
      |> Enum.map(& &1.locations)
      |> List.flatten()

    # all locations had the correct fields
    assert Enum.all?(locations, fn location ->
             location.id != nil && location.name != "" && location.area != "" && !location.visited
           end)
  end
end
