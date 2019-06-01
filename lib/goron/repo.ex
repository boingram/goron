defmodule Goron.Repo do
  use Ecto.Repo,
    otp_app: :goron,
    adapter: Ecto.Adapters.Postgres
end
