defmodule Goron.Repo.Migrations.CreateLocation do
  use Ecto.Migration

  def change do
    create table(:location) do
      add(:key, :string)
      add(:name, :string)
      add(:area_id, references(:area))

      timestamps()
    end

    create(index(:location, [:area_id]))
  end
end
