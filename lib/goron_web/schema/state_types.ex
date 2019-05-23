defmodule GoronWeb.Schema.StateTypes do
  @moduledoc """
  Defines GraphQL types for the user's state
  """
  use Absinthe.Schema.Notation

  object :state do
    field(:id, :id)
    field(:items, list_of(:visited_item))
    field(:areas, list_of(:visited_area))
  end

  object :visited_item do
    field(:id, :id)
    field(:level, :integer)
  end

  object :visited_area do
    field(:name, :string)
    field(:locations, list_of(:visited_location))
  end

  object :visited_location do
    field(:id, :id)
    field(:name, :string)
    field(:accessible, :boolean)
    field(:visited, :boolean)
  end
end
