defmodule GoronWeb.Schema.AreaTypes do
  @moduledoc """
  Defines GraphQL types for an area
  """
  use Absinthe.Schema.Notation
  import_types(GoronWeb.Schema.LocationTypes)

  object :area do
    field(:name, :string)
    field(:locations, list_of(:location))
  end
end
