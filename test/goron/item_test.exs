defmodule Goron.ItemTest do
  use ExUnit.Case

  alias Goron.Item

  test "get all the items" do
    assert Item.get_all_items() == []
  end
end
