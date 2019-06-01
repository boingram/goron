defmodule Goron.Location do
  use Ecto.Schema
  import Ecto.Changeset

  schema "location" do
    field :key, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:key, :name])
    |> validate_required([:key, :name])
  end
end
