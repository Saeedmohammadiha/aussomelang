import { tokenizer } from "./tokenizer/tokenizer";

let input = `let x = 10
let y = "test"`;
const result = tokenizer(input);
console.log({ result });
