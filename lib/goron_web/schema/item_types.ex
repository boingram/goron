defmodule GoronWeb.Schema.ItemTypes do
  @moduledoc """
  Defines GraphQL types for an item
  """
  use Absinthe.Schema.Notation

  object :item do
    field(:id, :id)
    field(:name, :string)
    field(:image, :string)
    field(:selected, :boolean)
  end
end
