defmodule GoronWeb.Resolvers.StateResolver do
  alias Goron.Item.VisitedItem
  alias Goron.State

  def update_item(_parent, %{items: items}, _resolution) do
    item_map =
      items
      |> Enum.map(fn %{} = item -> VisitedItem.from_map(item) end)
      |> Enum.into(%{}, fn item -> {item.id, item} end)

    areas = Goron.Area.get_all_areas(item_map)

    State.put(%State{
      id: 1,
      areas: areas,
      items: item_map
    })

    response = %{
      id: 1,
      areas: areas,
      items: items
    }

    {:ok, response}
  end

  def update_item(_parent, _args, _resolution) do
    {:ok, %{}}
  end
end
