import fs from 'fs';
import {question} from "readline-sync";
import NamesParse from "./Todos/Todos.js";
import PartIndex from "./Types/Types.ts";

(async() => {

    for (let i = 0; i < 1; i++) {

        const index = new PartIndex(
            "Enter Todo 1: ",
            "Enter Todo 2: ",
            "Enter Todo 3: ",
        )

        const todoListed1 = question(index.getOne());
        const todoListed2 = question(index.getTwo());
        const todoListed3 = question(index.getThree());
        let names = [todoListed1, todoListed2, todoListed3];

        const values = names.values()

        for await (const name of values) {
            const namesPar = new NamesParse.NamesParse(name);
            i += 1;
            console.log(upper("Todo " + i + ": " + namesPar.get()))
            const deleteDate = question("Do You Want to Remove Current Data: ");
            if (deleteDate.includes("N")) {
                fs.appendFileSync("todos.txt", ``);
                break;

            } else {
                fs.appendFileSync("todos.txt", `Todos ${i}: ${upper(namesPar.get())}\n`);
            }
        }
    }
})();

const upper = (a) => {
    return a.toUpperCase()
}