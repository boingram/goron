defmodule Goron.Location.OverworldTest do
  use ExUnit.Case

  alias Goron.Location.Overworld

  test "kokiri sword chest is always accessible" do
    assert Overworld.is_accessible?("Kokiri Sword Chest", %{})
  end
end
