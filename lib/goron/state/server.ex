defmodule Goron.State.Server do
  @moduledoc """
  Defines a server used to store state across all users
  """

  use GenServer
  alias Goron.State.Impl

  def init(state) do
    {:ok, state}
  end

  def handle_call({:fetch, id}, _, state_by_id) do
    result = Impl.fetch(state_by_id, id)
    {:reply, result, state_by_id}
  end

  def handle_call({:fetch_all}, _, state_by_id) do
    result = Impl.fetch_all(state_by_id)
    {:reply, result, state_by_id}
  end

  def handle_cast({:put, new_state = %Goron.State{}}, state_by_id) do
    updated_state_by_id = Impl.put(state_by_id, new_state)
    {:noreply, updated_state_by_id}
  end
end
