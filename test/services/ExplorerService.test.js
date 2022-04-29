describe("Suit test for ExplorerService", () => {
    const Reader = require("../../lib/utils/Reader");
    const ExplorerService = require("../../lib/services/ExplorerService");
    test("1) FilterByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const res = ExplorerService.filterByMission(explorers, "node");
        expect(res.length).toBe(10);
    });
    test("2) GetAmountOfExplorersByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const res = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(res).toBe(10);
    });
    test("3) GetExplorersUsernamesByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const res = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );
        expect(res.length).toBe(10);
    });
});
