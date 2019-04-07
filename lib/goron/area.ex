defmodule Goron.Area do
  @moduledoc """
  Defines data structure for an area of locations to be 
  checked by the player
  """
  @derive Jason.Encoder
  defstruct area: "", locations: []
end
