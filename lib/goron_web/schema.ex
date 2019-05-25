defmodule GoronWeb.Schema do
  @moduledoc """
  The GraphQL schema for accessing various pieces of data
  in the application
  """
  use Absinthe.Schema
  import_types(GoronWeb.Schema.AreaTypes)
  import_types(GoronWeb.Schema.ItemTypes)
  import_types(GoronWeb.Schema.StateTypes)

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

  mutation do
    @desc "Update an item"
    field :update_item, type: :state do
      arg(:id, :id)
      arg(:items, list_of(:visited_item_input))

      resolve(&Resolvers.StateResolver.update_item/3)
    end
  end
end
