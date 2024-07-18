import { Token } from "../types/token";
import PositionHolder from "../utils/PositionHolder";

import { stringVariableParser } from "./stringVariableParser";

const AST: any = {
  name: "program",
  body: [],
};

const typesList = ["str", "num", "bool", "arr", "obj", "func"];

export const parser = (tokens: Token[]) => {
  const position = new PositionHolder(tokens);

  while (!position.idEndOfData()) {
    let item = position.getCurrentItem();
    if (item.type === "IDENTIFIER") {
      if (typesList.includes(item.value)) {
        switch (item.value) {
          case "str":
            AST.body.push(stringVariableParser(position));
            break;

          default:
            console.log(position.getPosition());
            position.moveForward();
            break;
        }
      } else {
        console.log("name");
        position.moveForward();
      }
    } else {
      position.moveForward();

    }
  }

  return AST;
};
