defmodule GoronWeb.Schema.StateTypes do
  @moduledoc """
  Defines GraphQL types for the user's state
  """
  use Absinthe.Schema.Notation
  import_types(GoronWeb.Schema.AreaTypes)
  import_types(GoronWeb.Schema.ItemTypes)

  object :state do
    field(:id, :id)
    field(:items, list_of(:item))
    field(:areas, list_of(:area))
  end
end
