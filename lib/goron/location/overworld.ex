defmodule Goron.Location.Overworld do
  @moduledoc """
  Provides operations to retrieve and check accessibility
  of overworld locations
  """

  alias Goron.Area
  alias Goron.Location

  @area "Overworld"

  def get_locations(items) do
    locations =
      Enum.map(
        [
          %Location{
            id: 1,
            name: "Kokiri Sword Chest"
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
end
