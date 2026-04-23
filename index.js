import fs from 'fs';
import {question} from "readline-sync";
import NamesParse from "./Todos/Todos";

let names = [];

async function main() {

    const listLength = Number(question("Enter Length: "));

    for (let i = 0; i < listLength; i++) {

        const read = question("Enter Todo: ");

        names.push(read)


        for (const name of names) {
            const namesPar = new NamesParse(name);
            console.log(upper("Todo " + i + ": " + namesPar.get()))
            fs.writeFileSync("todos.txt", `Todos ${i}: ${namesPar.get()}`);
        }
    }
}


const upper = (a) => {
    return a.toUpperCase()
}

main().then(a => a);