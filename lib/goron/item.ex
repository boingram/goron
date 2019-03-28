defmodule Goron.Item do
  @moduledoc """
  Defines an interface for retrieving the items that can 
  be collected by Link
  """
  @derive Jason.Encoder
  defstruct id: nil, name: "", image: "", selected: false

  defdelegate get_all_items(), to: Goron.Item.Impl
end
