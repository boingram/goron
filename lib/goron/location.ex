defmodule Goron.Location do
  @moduledoc """
  Defines a location where items can be found.
  """
  @derive Jason.Encoder
  defstruct id: nil, name: "", area: "", accessible: false, visited: false
end
