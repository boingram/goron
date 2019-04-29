defmodule Goron.Item.VisitedItem do
  defstruct id: nil, level: 0, max_level: nil

  alias Goron.Item

  def to_visited_item(%Item{} = item) do
    %Goron.Item.VisitedItem{
      id: item.id,
      level: item.level,
      max_level: item.max_level
    }
  end
end
