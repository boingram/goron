defmodule Goron.Location do
  use Ecto.Schema
  import Ecto.Changeset

  schema "location" do
    field(:key, :string)
    field(:name, :string)
    field(:area_id, :integer)

    timestamps()
  end

  def get_changeset(location = %Goron.Location{}) do
    changeset(%Goron.Location{}, Map.from_struct(location))
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:key, :name])
    |> validate_required([:key, :name])
  end
end
