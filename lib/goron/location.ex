defmodule Goron.Location do
  @moduledoc """
  Provides operations to retrieve and check accessibility
  of all locations in the game
  """
  defstruct id: nil, name: "", area: "", accessible: false, visited: false

  alias Goron.Location.Overworld
  alias Goron.State

  def get_all_locations(%State{items: items}) do
    items
    |> Map.new(&{&1.name, &1})
    |> get_locations
  end

  def get_locations(items) do
    %{
      overworld: Overworld.get_locations(items)
    }
  end
end
