defmodule Goron.Item.Impl do
  @moduledoc """
  Implements functions for retrieving the items that can 
  be collected by Link
  """

  alias Goron.Item

  def get_all_items do
    [
      %Item{
        id: 1,
        name: "Kokiri Sword",
        image: "kokiri-sword"
      },
      %Item{
        id: 2,
        name: "Ocarina",
        image: "ocarina-1"
      }
    ]
  end
end
