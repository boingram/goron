defmodule Goron.Item.Impl do
  @moduledoc """
  Implements functions for retrieving the items that can 
  be collected by Link
  """

  alias Goron.Item

  @item_atoms [
    :kokiri_sword,
    :ocarina
  ]

  def get_all_items do
    [
      %Item{
        id: "1",
        name: "Kokiri Sword",
        image: "kokiri-sword"
      },
      %Item{
        id: "2",
        name: "Fairy Ocarina",
        upgrade_names: ["Ocarina of Time"],
        image: "ocarina-1",
        upgrade_images: ["ocarina-2"],
        max_level: 2
      }
    ]
  end

  def id_to_atom(id) when is_number(id) do
    Enum.at(@item_atoms, id - 1)
  end

  def id_to_atom(id) do
    {numeric_id, _remainder} = Integer.parse(id)
    id_to_atom(numeric_id)
  end
end
