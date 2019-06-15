defmodule Goron.Area do
  use Ecto.Schema
  import Ecto.Changeset
  require Logger

  schema "area" do
    field(:key, :string)
    field(:name, :string)
    has_many(:locations, Goron.Location)

    timestamps()
  end

  def get_changeset(area = %Goron.Area{}) do
    changeset(%Goron.Area{}, Map.from_struct(area))
  end

  @doc false
  def changeset(area, attrs \\ %{}) do
    area
    |> cast(attrs, [:key, :name])
    |> validate_required([:key, :name])
  end
end
