defmodule GoronWeb.Schema.ItemTypes do
  @moduledoc """
  Defines GraphQL types for an item
  """
  use Absinthe.Schema.Notation

  object :item do
    field(:id, :id)
    field(:name, :string)
    field(:upgrade_names, list_of(:string))
    field(:image, :string)
    field(:upgrade_images, list_of(:string))
    field(:level, :integer)
    field(:max_level, :integer)
  end
end
