defmodule Goron.State.Impl do
  @moduledoc """
  Defines operations around a map to store user's state
  """

  def new do
    %{}
  end

  def fetch(state_by_id, id) do
    Map.fetch(state_by_id, id)
  end

  def fetch_all(state_by_id) do
    state_by_id
  end

  def put(state_by_id, new_state = %Goron.State{}) do
    Map.put(state_by_id, new_state.id, new_state)
  end
end
