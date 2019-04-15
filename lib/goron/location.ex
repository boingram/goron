defmodule Goron.Location do
  @moduledoc """
  Provides operations to retrieve and check accessibility
  of all locations in the game
  """
  @derive Jason.Encoder
  defstruct id: nil, name: "", area: "", accessible: false, visited: false
end
