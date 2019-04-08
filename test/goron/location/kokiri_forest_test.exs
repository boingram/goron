defmodule Goron.Location.KokiriForestTest do
  use ExUnit.Case

  alias Goron.Location.KokiriForest

  test "kokiri sword chest is always accessible" do
    assert KokiriForest.is_accessible?("Kokiri Sword Chest", %{})
  end
end
