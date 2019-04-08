defmodule Goron.Location.KokiriForest do
  @moduledoc """
  Provides operations to retrieve and check accessibility
  of Kokiri Forest locations
  """

  alias Goron.Area
  alias Goron.Location

  @area "Kokiri Forest"

  def get_locations(items) do
    locations =
      Enum.map(
        [
          %Location{
            id: 1,
            name: "Kokiri Sword Chest"
          },
          %Location{
            id: 2,
            name: "Mido's House 1"
          },
          %Location{
            id: 3,
            name: "Mido's House 2"
          },
          %Location{
            id: 4,
            name: "Mido's House 3"
          },
          %Location{
            id: 5,
            name: "Mido's House 4"
          },
          %Location{
            id: 6,
            name: "Ocarina Memory Game"
          }
        ],
        fn location ->
          %Location{location | accessible: is_accessible?(location.name, items), area: @area}
        end
      )

    %Area{
      area: @area,
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

  def is_accessible?("Ocarina Memory Game", items) do
    false
  end
end
