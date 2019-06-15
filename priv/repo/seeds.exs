alias Goron.Area
alias Goron.Location
alias Goron.Repo

Repo.create_all_areas([
  %Area{
    key: "kokiri_forest",
    name: "Kokiri Forest"
  }
])

Goron.Repo.create_all_locations([
  %Location{
    key: "kokiri_sword_chest",
    name: "Kokiri Sword Chest"
  },
  %Location{
    key: "midos_house_1",
    name: "Mido's House 1"
  },
  %Location{
    key: "midos_house_2",
    name: "Mido's House 2"
  },
  %Location{
    key: "midos_house_3",
    name: "Mido's House 3"
  },
  %Location{
    key: "midos_house_4",
    name: "Mido's House 4"
  },
  %Location{
    key: "song_of_storms_grotto",
    name: "Song of Storms Grotto"
  }
])
