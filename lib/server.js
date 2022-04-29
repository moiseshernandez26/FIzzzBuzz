const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    console.log(`FizzBuzz Api GET getExplorersByMission ${new Date()}`);
    res
        .status(200)
        .json(ExplorerController.getExplorersByMission(req.params.mission));
});

app.get("/v1/amount/:mission", (req, res) => {
    console.log(`FizzBuzz Api GET getExplorersAmountByMission ${new Date()}`);
    res.status(200).json({
        mission: req.params.mission,
        quantity: ExplorerController.getExplorersAmountByMission(
            req.params.mission
        ),
    });
});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    console.log(`FizzBuzz Api GET getExplorersUsernamesByMission${new Date()}`);
    res.status(200).json({
        mission: req.params.mission,
        explorers: ExplorerController.getExplorersUsernamesByMission(
            req.params.mission
        ),
    });
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});