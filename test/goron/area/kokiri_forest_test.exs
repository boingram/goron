defmodule Goron.Area.KokiriForestTest do
  use ExUnit.Case

  alias Goron.Area.KokiriForest

  test "kokiri sword chest is always accessible" do
    assert KokiriForest.is_accessible?("Kokiri Sword Chest", %{})
  end

  test "mido's chests are always accessible" do
    assert KokiriForest.is_accessible?("Mido's House 1", %{})
    assert KokiriForest.is_accessible?("Mido's House 2", %{})
    assert KokiriForest.is_accessible?("Mido's House 3", %{})
    assert KokiriForest.is_accessible?("Mido's House 4", %{})
  end
end
