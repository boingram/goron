defmodule GoronWeb.StateControllerTest do
  use GoronWeb.ConnCase

  test "get_locations/2 responds with all locations using default state", %{conn: conn} do
    response =
      conn
      |> get(Routes.state_path(conn, :get_locations))
      |> json_response(200)

    assert Map.has_key?(response, "overworld")

    locations =
      response
      |> Map.values()
      |> List.flatten()

    assert Enum.all?(locations, fn location ->
             location["id"] != nil && location["name"] != "" && location["area"] != "" &&
               !location["visited"]
           end)
  end
end
