defmodule Goron.StateTest do
  use ExUnit.Case, async: true
  alias Goron.State

  test "read/write using server" do
    assert State.fetch_all() == %{}

    assert State.fetch("not a real key") == :error

    State.put(%Goron.State{id: "id"})
    assert State.fetch_all() != %{}
    {:ok, state} = State.fetch("id")
    assert state.id == "id"
  end
end
