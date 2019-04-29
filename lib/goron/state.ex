defmodule Goron.State do
  @moduledoc """
  Defines the player's state in the randomizer in 
  terms of items acquired, locations checked, and 
  rules enforced
  """
  defstruct id: nil, items: %{}, areas: %{}

  @process_name :state

  def new do
    {:ok, _pid} = GenServer.start_link(Goron.State.Server, %{}, name: @process_name)
  end

  def fetch_all do
    GenServer.call(@process_name, {:fetch_all})
  end

  def fetch(state_id) do
    GenServer.call(@process_name, {:fetch, state_id})
  end

  def put(new_state = %Goron.State{}) do
    GenServer.cast(@process_name, {:put, new_state})
  end
end
