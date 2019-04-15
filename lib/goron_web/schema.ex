defmodule GoronWeb.Schema do
  use Absinthe.Schema
  import_types(GoronWeb.Schema.ItemTypes)

  alias GoronWeb.Resolvers.ItemResolver

  query do
    @desc "Get all items"
    field :items, list_of(:item) do
      resolve(&ItemResolver.list_items/3)
    end
  end
end
