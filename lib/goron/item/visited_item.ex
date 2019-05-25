defmodule Goron.Item.VisitedItem do
  @moduledoc """
  Defines an item that has been visited by the user and provides
  operations upon that
  """

  defstruct id: nil, level: 0, max_level: nil

  alias Goron.Item
  alias Goron.Item.VisitedItem

  def is_acquired?(%{} = items, ids) when is_list(ids) do
    Enum.all?(ids, &is_acquired?(items, &1))
  end

  def is_acquired?(%{} = items, id) when is_atom(id) do
    case Map.fetch(items, id) do
      {:ok, %VisitedItem{level: level}} -> level > 0
      :error -> false
    end
  end

  def from_map(%{id: id, level: level, max_level: max_level}) do
    %VisitedItem{
      id: Item.to_atom(id),
      level: level,
      max_level: max_level
    }
  end
end
