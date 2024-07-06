import { tokenizer } from "./tokenizer/tokenizer";

let input = `num x = 10
str y = "test"`;
const result = tokenizer(input);
console.log({ result });
