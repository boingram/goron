defmodule GoronWeb.Resolvers.ItemResolver do
  @moduledoc """
  Resolves GraphQL requests for items
  """
  def list_items(_parent, _args, _resolution) do
    {:ok, Goron.Item.get_all_items()}
  end
end
