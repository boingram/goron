defmodule Goron.Item.Impl do
  @moduledoc """
  Implements functions for retrieving the items that can 
  be collected by Link
  """

  alias Goron.Item

  def get_all_items do
    [
      %Item{
        id: :kokiri_sword,
        name: "Kokiri Sword",
        image: "kokiri-sword"
      },
      %Item{
        id: :ocarina,
        name: "Fairy Ocarina",
        upgrade_names: ["Ocarina of Time"],
        image: "ocarina-1",
        upgrade_images: ["ocarina-2"],
        max_level: 2
      }
    ]
  end
end
