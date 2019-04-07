defmodule Goron.State do
  @moduledoc """
  Defines the player's state in the randomizer in 
  terms of items acquired, locations checked, and 
  rules enforced
  """
  defstruct items: [], locations: []
end
