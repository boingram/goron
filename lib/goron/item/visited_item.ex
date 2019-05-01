defmodule Goron.Item.VisitedItem do
  defstruct id: nil, level: 0, max_level: nil

  alias Goron.Item
  alias Goron.Item.VisitedItem

  def is_acquired?(%{} = items, id) when is_atom(id) do
    case Map.fetch(items, id) do
      {:ok, %VisitedItem{level: level}} -> level > 0
      :error -> false
    end
  end

  def from_item(%Item{id: id, level: level, max_level: max_level}) do
    visited_item = %VisitedItem{
      id: id,
      level: level,
      max_level: max_level
    }

    IO.inspect(visited_item)
  end
end
