defmodule GoronWeb.Resolvers.AreaResolver do
  @moduledoc """
  Resolves GraphQL requests for areas
  """
  def list_areas(_parent, _args, _resolution) do
    {:ok, Goron.Area.get_all_areas()}
  end
end
