defmodule GoronWeb.StateControllerTest do
  use GoronWeb.ConnCase

  test "get_locations/2 responds with all locations using default state", %{conn: conn} do
    response =
      conn
      |> get(Routes.state_path(conn, :get_locations))
      |> json_response(200)

    # we got back locations 
    assert length(response) > 0

    # all of the locations had an area
    assert Enum.all?(response, &(&1["area"] != ""))

    locations =
      response
      |> Enum.map(& &1["locations"])
      |> List.flatten()

    # all locations had the correct fields
    assert Enum.all?(locations, fn location ->
             location["id"] != nil && location["name"] != "" && location["area"] != "" &&
               !location["visited"]
           end)
  end
end
