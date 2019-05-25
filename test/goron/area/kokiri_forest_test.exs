defmodule Goron.Area.KokiriForestTest do
  use ExUnit.Case

  alias Goron.Area.KokiriForest
  alias Goron.Item.VisitedItem

  test "kokiri sword chest is always accessible" do
    assert KokiriForest.is_accessible?("Kokiri Sword Chest", %{})
  end

  test "mido's chests are always accessible" do
    assert KokiriForest.is_accessible?("Mido's House 1", %{})
    assert KokiriForest.is_accessible?("Mido's House 2", %{})
    assert KokiriForest.is_accessible?("Mido's House 3", %{})
    assert KokiriForest.is_accessible?("Mido's House 4", %{})
  end

  test "song of storms grotto requires both ocarina and song of storms" do
    assert !KokiriForest.is_accessible?("Song of Storms Grotto", %{})

    assert !KokiriForest.is_accessible?("Song of Storms Grotto", %{
             :song_of_storms => %VisitedItem{id: :song_of_storms, level: 1}
           })

    assert !KokiriForest.is_accessible?("Song of Storms Grotto", %{
             :song_of_storms => %VisitedItem{id: :song_of_storms, level: 1}
           })
  end
end
