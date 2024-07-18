import { Token } from "../types/token";
import PositionHolder from "../utils/PositionHolder";

export const stringVariableParser = (position: PositionHolder<Token>) => {
  const stringAst = {
    name: "VariableDeclaration",
    type: position.getCurrentItem().value, // or just put string
    declarations: [
      {
        name: "VariableDeclarator",
        id: {
          name: "Identifier",
          value: position.moveForward().getCurrentItem().value,
        },
        init: {
          name: "Literal",
          // first move is for = and after that is for " or '
          value: position
            .moveForward()
            .moveForward()
            .moveForward()
            .getCurrentItem().value,
        },
      },
    ],
  };
  // to jump the closing "
  position.moveForward();

  return stringAst;
};
