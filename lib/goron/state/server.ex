defmodule Goron.State.Server do
  @moduledoc """
  Defines a server used to store state across all users
  """

  use GenServer
  alias Goron.State.Impl

  @impl GenServer
  def init(state) do
    {:ok, state}
  end

  @impl GenServer
  def handle_call({:fetch, id}, _, state_by_id) do
    result = Impl.fetch(state_by_id, id)
    {:reply, result, state_by_id}
  end

  @impl GenServer
  def handle_call({:fetch_all}, _, state_by_id) do
    result = Impl.fetch_all(state_by_id)
    {:reply, result, state_by_id}
  end

  @impl GenServer
  def handle_call({:put, new_state = %Goron.State{}}, _, state_by_id) do
    result = Impl.put(state_by_id, new_state)
    {:reply, result, result}
  end
end
