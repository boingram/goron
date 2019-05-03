defmodule GoronWeb.Resolvers.StateResolver do
  alias Goron.Item
  alias Goron.Item.VisitedItem
  alias Goron.State

  def update_item(_parent, %{item_id: item_id, level: level}, _resolution) do
    item_map =
      Item.get_all_items()
      |> Enum.map(&VisitedItem.from_item/1)
      |> Enum.into(%{}, fn %VisitedItem{} = item -> {item_id, item} end)

    item_to_update = item_map[item_id]

    updated_item_map =
      Map.put(item_map, item_id, %VisitedItem{
        item_to_update
        | level: level
      })

    areas = Goron.Area.get_all_areas(updated_item_map)

    State.put(%State{
      id: 1,
      areas: areas,
      items: updated_item_map
    })

    response = %{
      id: 1,
      areas: areas,
      items: Map.values(updated_item_map)
    }

    {:ok, response}
  end

  def update_item(_parent, _args, _resolution) do
    {:ok, %{}}
  end
end
