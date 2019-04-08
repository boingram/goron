defmodule Goron.Location do
  @moduledoc """
  Provides operations to retrieve and check accessibility
  of all locations in the game
  """
  @derive Jason.Encoder
  defstruct id: nil, name: "", area: "", accessible: false, visited: false

  alias Goron.Location.KokiriForest
  alias Goron.State

  def get_all_locations(%State{items: items}) do
    items
    |> get_locations
  end

  def get_locations(items) do
    [
      KokiriForest.get_locations(items)
    ]
  end
end
