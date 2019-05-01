defmodule Goron.Item.VisitedItem do
  defstruct key: nil, level: 0, max_level: nil

  alias Goron.Item
  alias Goron.Item.VisitedItem

  def is_acquired?(%{} = items, key) when is_atom(key) do
    case Map.fetch(items, key) do
      {:ok, %VisitedItem{level: level}} -> level > 0
      :error -> false
    end
  end

  def to_visited_item(%Item{id: id, level: level, max_level: max_level}) do
    key = Item.id_to_atom(id)
    IO.inspect(key)

    visited_item = %VisitedItem{
      key: Item.id_to_atom(id),
      level: level,
      max_level: max_level
    }

    IO.inspect(visited_item)
  end
end
