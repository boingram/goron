defmodule Goron.Area.KokiriForest do
  @moduledoc """
  Provides operations to retrieve and check accessibility
  of Kokiri Forest locations
  """

  alias Goron.Area
  alias Goron.Item.VisitedItem
  alias Goron.Location

  @area_id :kokiri_forest
  @area "Kokiri Forest"

  def get_area(items) do
    locations =
      Enum.map(
        [
          %Location{
            id: :kokiri_sword_chest,
            name: "Kokiri Sword Chest"
          },
          %Location{
            id: :midos_house_1,
            name: "Mido's House 1"
          },
          %Location{
            id: :midos_house_2,
            name: "Mido's House 2"
          },
          %Location{
            id: :midos_house_3,
            name: "Mido's House 3"
          },
          %Location{
            id: :midos_house_4,
            name: "Mido's House 4"
          },
          %Location{
            id: :song_of_storms_grotto,
            name: "Song of Storms Grotto"
          }
        ],
        fn location ->
          %Location{location | accessible: is_accessible?(location.name, items), area: @area}
        end
      )

    %Area{
      id: @area_id,
      name: @area,
      locations: locations
    }
  end

  def is_accessible?("Kokiri Sword Chest", _items) do
    true
  end

  def is_accessible?("Mido's House 1", _items) do
    true
  end

  def is_accessible?("Mido's House 2", _items) do
    true
  end

  def is_accessible?("Mido's House 3", _items) do
    true
  end

  def is_accessible?("Mido's House 4", _items) do
    true
  end

  def is_accessible?("Song of Storms Grotto", items) do
    VisitedItem.is_acquired?(items, [:ocarina, :song_of_storms])
  end
end
