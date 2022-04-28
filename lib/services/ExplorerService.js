class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission === mission)
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    return 0
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    return []
  }
}
module.exports = ExplorerService
