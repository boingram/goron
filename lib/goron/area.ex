defmodule Goron.Area do
  @moduledoc """
  Defines operations to retrieve areas based on the user's state.
  """
  @derive Jason.Encoder
  defstruct name: "", locations: []

  alias Goron.Area.KokiriForest
  alias Goron.State

  def get_all_areas do
    get_all_areas(%{})
  end

  def get_all_areas(items = %{}) do
    items
    |> get_areas
  end

  def get_areas(items) do
    [
      KokiriForest.get_area(items)
    ]
  end
end
