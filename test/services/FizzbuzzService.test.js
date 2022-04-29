describe("Suit test for ExplorerService", () => {
    const FizzbuzzService = require("../../lib/services/FizzbuzzService");
    test("1) Explorer con score 1", () => {
        const explorer = { name: "Explorer 1", score: 1 };
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe(1);
    });

    test("2) Explorer con score 3", () => {
        const explorer = { name: "Explorer 1", score: 3 };
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe("FIZZ");
    });
    test("3) Explorer con score 5", () => {
        const explorer = { name: "Explorer 1", score: 5 };
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe("BUZZ");
    });
    test("4) Explorer con score 15", () => {
        const explorer = { name: "Explorer 1", score: 15 };
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe("FIZZBUZZ");
    });
    test("5) Valor de score no es un numero", () => {
        const explorer = { name: "Explorer 1", score: "a" };
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).not.toBe("a");
    });
    test("6) Validar con un explorer vacio", () => {
        const explorer = {};
        const res = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(res.trick).toBe(undefined);
    });
});
