defmodule Goron.Repo do
  alias Goron.Area
  alias Goron.Location
  require Logger

  use Ecto.Repo,
    otp_app: :goron,
    adapter: Ecto.Adapters.Postgres

  def create_all_areas(areas) do
    Enum.each(areas, &create_area(&1))
  end

  def create_area(area = %Area{}) do
    changeset = Area.get_changeset(area)

    if changeset.valid? do
      case Goron.Repo.insert(changeset) do
        {:ok, inserted} -> Logger.info("Inserted area #{inserted.key}")
        {:error, changeset} -> Logger.error("Error inserting area: #{changeset}")
      end
    else
      Logger.error("Error creating area, invalid changeset: #{changeset.errors}")
    end
  end

  def create_all_locations(locations) do
    Enum.each(locations, &create_location(&1))
  end

  def create_location(location = %Location{}) do
    changeset = Location.get_changeset(location)

    if changeset.valid? do
      case Goron.Repo.insert(changeset) do
        {:ok, inserted} -> Logger.info("Inserted location #{inserted.key}")
        {:error, changeset} -> Logger.error("Error inserting location: #{changeset}")
      end
    else
      Logger.error("Error creating location, invalid changeset: #{changeset.errors}")
    end
  end
end
