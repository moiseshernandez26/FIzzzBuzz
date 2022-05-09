const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    console.log(`FizzBuzz GET getExplorersByMission: ${req.params.mission}`);
    res
        .status(200)
        .json(ExplorerController.getExplorersByMission(req.params.mission));
});

app.get("/v1/amount/:mission", (req, res) => {
    console.log(`FizzBuzz GET getExplorersAmountByMission: ${req.params.mission}`);
    res.status(200).json({
        mission: req.params.mission,
        quantity: ExplorerController.getExplorersAmountByMission(
            req.params.mission
        ),
    });
});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    console.log(`FizzBuzz GET getExplorersUsernamesByMission: ${req.params.mission}`);
    res.status(200).json({
        mission: req.params.mission,
        explorers: ExplorerController.getExplorersUsernamesByMission(
            req.params.mission
        ),
    });
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    console.log(`FizzBuzz GET FizzBuzz: ${req.params.score}`);
    const trickReq= ExplorerController.getFizz(+req.params.score);

    res.status(200).json({
        score: req.params.score,
        trick: trickReq,
    });
});

app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorersByStack = ExplorerController.getExplorersByStack(stack);
    response.json(explorersByStack);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});