defmodule Goron.LocationTest do
  use ExUnit.Case

  alias Goron.Location
  alias Goron.State

  test "all the locations have the basic fields" do
    areas = Location.get_all_locations(%State{})

    # we got back locations
    assert length(areas) > 0

    # all of the locations had an area
    assert Enum.all?(areas, &(&1.area != ""))

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
