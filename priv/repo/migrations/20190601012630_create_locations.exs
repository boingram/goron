defmodule Goron.Repo.Migrations.CreateLocations do
  use Ecto.Migration

  def change do
    create table(:locations) do
      add(:key, :string, null: false)
      add(:name, :string, null: false)
      add(:area, :string, null: false)

      timestamps()
    end
  end
end
