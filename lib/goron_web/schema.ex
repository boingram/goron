defmodule GoronWeb.Schema do
  use Absinthe.Schema
  import_types(GoronWeb.Schema.AreaTypes)
  import_types(GoronWeb.Schema.ItemTypes)

  alias GoronWeb.Resolvers

  query do
    @desc "Get all items"
    field :items, list_of(:item) do
      resolve(&Resolvers.ItemResolver.list_items/3)
    end

    @desc "Get all areas"
    field :areas, list_of(:area) do
      resolve(&Resolvers.AreaResolver.list_areas/3)
    end
  end
end
