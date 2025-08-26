import { somar } from "../src/calculadora.js";
import { subtrair } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        //AA
        //Arrange (Preparar)
        const a = 5;
        const b = 7;

        //Act (Executar)
        const resultado = somar(a, b);

        //Assert (Verificar)
        expect(resultado).toBe(12);
    });

    test("Deve subtrair dois números corretamente", () => {
        //Arrange (Preparar)
        const a = 10;
        const b = 4;

        //Act (Executar)
        const resultado = subtrair(a, b);

        //Assert (Verificar)
        expect(resultado).toBe(6);
    });
})