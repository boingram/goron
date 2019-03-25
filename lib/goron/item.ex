defmodule Goron.Item do
  @moduledoc """
  Defines an interface for retrieving the items that can 
  be collected by Link
  """
  defdelegate get_all_items(), to: Goron.Item.Impl
end
