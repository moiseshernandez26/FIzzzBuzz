const ExplorerController = require("../../lib/controllers/ExplorerController");
describe("Suit test for ExplorerController", () => {
    test("1) Testear el FilterByMission", () => {
        const expectedRes = [
            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa2",
                "githubUsername": "ajolonauta2",
                "score": 2,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "groovy",
                    "elm"
                ]
            },
            {
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                    "elixir",
                    "groovy",
                    "reasonML"
                ]
            },
            {
                "name": "Woopa4",
                "githubUsername": "ajolonauta4",
                "mission": "node",
                "score": 4,
                "stacks": [
                    "javascript"
                ]
            },
            {
                "name": "Woopa5",
                "githubUsername": "ajolonauta5",
                "score": 5,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "elm"
                ]
            },
            {
                "name": "Woopa11",
                "githubUsername": "ajolonauta11",
                "score": 11,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ];
        const res = ExplorerController.getExplorersByMission("node");
        expect(res).toEqual(expectedRes);
    });
    test("2) Se testea el servicio getAmountOfByMission", () => {
        const res = ExplorerController.getExplorersAmountByMission("node");
        expect(res).toBe(10);
    });
    test("3) Se testea el servicio getUsernamesByMission", () => {
        const expectedRes = ["Woopa6", "Woopa7", "Woopa8", "Woopa9", "Woopa10"];
        const res = ExplorerController.getExplorersUsernamesByMission("java");
        expect(res).toEqual(expectedRes);
    });
    
    test("4) getFizz", () => {
        const res = ExplorerController.getFizz(9);
        expect(res).toMatch("FIZZ");
    });
});
