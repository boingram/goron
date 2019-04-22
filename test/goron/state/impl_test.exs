defmodule Goron.State.ImplTest do
  use ExUnit.Case, async: true

  alias Goron.State.Impl

  test "read and write" do
    state_map = Impl.new()

    assert state_map == %{}

    assert Impl.fetch_all(state_map) == %{}
    assert Impl.fetch(state_map, "not a real key") == :error

    state_map = Impl.put(state_map, %Goron.State{id: "id"})
    assert Impl.fetch_all(state_map) != %{}
    {:ok, state} = Impl.fetch(state_map, "id")
    assert state.id == "id"
  end
end
