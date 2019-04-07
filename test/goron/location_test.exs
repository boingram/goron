defmodule Goron.LocationTest do
  use ExUnit.Case

  alias Goron.Location
  alias Goron.State

  test "all the locations have the basic fields" do
    locations = Location.get_all_locations(%State{})

    flattened_locations =
      locations
      |> Map.values()
      |> List.flatten()

    assert Enum.all?(flattened_locations, fn location ->
             location.id != nil && location.name != "" && location.area != ""
           end)
  end
end
