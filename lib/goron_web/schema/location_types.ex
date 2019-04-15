defmodule GoronWeb.Schema.LocationTypes do
  use Absinthe.Schema.Notation

  object :location do
    field(:id, :id)
    field(:name, :string)
    field(:area, :string)
    field(:accessible, :boolean)
    field(:visited, :boolean)
  end
end
