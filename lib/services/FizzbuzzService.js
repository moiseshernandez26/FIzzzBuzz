class FizzbuzzService {
    static applyValidationInExplorer(explorer) {

        if (!explorer.score) return new Error("El score no puede ser nulo");
        if (typeof explorer.score !== "number") return new Error("El score debe ser un numero");

        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        }
        if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }
        explorer.trick = explorer.score;
        return explorer;
    }


    static applyValidationInNumber(number) {
        if (typeof number !== "number") return new Error("Debe de ser un numero");
        if (number % 5 === 0 && number % 3 === 0) return "FIZZBUZZ";
        if (number % 3 === 0) return "FIZZ";
        if (number % 5 === 0) return "BUZZ";
        return number;
    }
}
module.exports = FizzbuzzService;
