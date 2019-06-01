defmodule Goron.Location do
  use Ecto.Schema
  import Ecto.Changeset

  schema "location" do
    field(:key, :string)
    field(:area, :string)
    field(:name, :string)

    timestamps()
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:id, :name, :area])
    |> validate_required([:id, :name, :area])
  end
end
