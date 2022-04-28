class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission === mission)
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    return explorers.reduce((acc, explorer) => {
      if (explorer.mission === mission) {
        acc++
      }
      return acc
    }, 0)
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    return explorers.reduce((acc, explorer) => {
      if (explorer.mission === mission) {
        acc.push(explorer.name)
      }
      return acc
    }, [])
  }
}
module.exports = ExplorerService
