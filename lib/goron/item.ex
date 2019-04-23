defmodule Goron.Item do
  @moduledoc """
  Defines an interface for retrieving the items that can 
  be collected by Link
  """
  @derive Jason.Encoder
  defstruct id: nil,
            name: "",
            upgrade_names: [],
            image: "",
            upgrade_images: [],
            level: 0,
            max_level: 1

  defdelegate get_all_items(), to: Goron.Item.Impl
end
