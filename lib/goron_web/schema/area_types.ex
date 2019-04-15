defmodule GoronWeb.Schema.AreaTypes do
  use Absinthe.Schema.Notation
  import_types(GoronWeb.Schema.LocationTypes)

  object :area do
    field(:name, :string)
    field(:locations, list_of(:location))
  end
end
