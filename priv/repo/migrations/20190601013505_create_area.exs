defmodule Goron.Repo.Migrations.CreateArea do
  use Ecto.Migration

  def change do
    create table(:area) do
      add(:key, :string)
      add(:name, :string)

      timestamps()
    end
  end
end
