defmodule GoronWeb.Resolvers.StateResolver do
  alias Goron.State

  def update_item(_parent, args, _resolution) do
    IO.inspect(args)
    {:ok, %{}}
  end
end
