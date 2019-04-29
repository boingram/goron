defmodule GoronWeb.Resolvers.StateResolver do
  alias Goron.Item
  alias Goron.Item.VisitedItem

  def update_item(_parent, %{item_id: item_id, level: level}, _resolution) do
    item_map =
      Item.get_all_items()
      |> Enum.map(&VisitedItem.to_visited_item/1)
      |> Enum.into(%{}, fn %VisitedItem{} = item -> {item.id, item} end)

    # update the value in the map

    IO.inspect(item_map)

    {:ok, %{}}
  end

  def update_item(_parent, args, _resolution) do
    IO.inspect(args)
    {:ok, %{}}
  end
end
