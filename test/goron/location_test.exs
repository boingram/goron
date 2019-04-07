defmodule Goron.LocationTest do
  use ExUnit.Case

  alias Goron.Location
  alias Goron.State

  test "get all the locations" do
    assert Location.get_all_locations(%State{}) == %{overworld: []}
  end
end
