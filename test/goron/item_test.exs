defmodule Goron.ItemTest do
  use ExUnit.Case

  alias Goron.Item

  test "get all the items" do
    assert Enum.all?(Item.get_all_items(), fn item ->
             item.id != nil && item.name != "" && !item.selected && item.image != ""
           end)
  end
end
