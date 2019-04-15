defmodule GoronWeb.Schema.ItemTypes do
  use Absinthe.Schema.Notation

  object :item do
    field(:id, :id)
    field(:name, :string)
    field(:image, :string)
    field(:selected, :boolean)
  end
end
