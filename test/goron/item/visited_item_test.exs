defmodule Goron.Item.VisitedItemTest do
  use ExUnit.Case

  alias Goron.Item
  alias Goron.Item.VisitedItem

  test "correctly create all visited items from items" do
    Item.get_all_items()
    |> Enum.map(&VisitedItem.to_visited_item/1)
    |> Enum.map(&is_valid_visited_item?/1)
  end

  def is_valid_visited_item?(%VisitedItem{} = item) do
    assert item.id != nil && item.level == 0 && item.max_level > 0
  end
end
