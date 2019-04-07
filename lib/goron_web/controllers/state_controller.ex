defmodule GoronWeb.StateController do
  use GoronWeb, :controller

  alias Goron.Location
  alias Goron.State

  def get_locations(conn, _params) do
    locations = Location.get_all_locations(%State{})
    json(conn, locations)
  end
end
