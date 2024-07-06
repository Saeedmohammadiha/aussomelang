import { Token } from "../types/token";

const ast = {
  type: "progam",
  body: [
    {
      type: "variableDeclaration",
      kind: "string",
      declarations: [
        {
          type: "variableDeclarator",
          id: {
            type: "Identifier",
            name: "test",
          },
          init: {
            type: "Literal",
            value: "asdkl;hfsdgjklasdfgjkl",
          },
        },
      ],
    },
  ],
};

const typesList = ["str", "num", "bool", "arr", "obj"];

const parser = (tokens: Token[]) => {
  let current = 0;

  while (current < tokens.length) {
    if (tokens[current].type === "IDENTIFIER") {
      if (typesList.includes(tokens[current].value)) {
        let branch = {
          type: "variableDeclaration",
          kind: tokens[current].value,
          declarations: [],
        };

        current++;
        let declarations = [
          {
            type: "variableDeclarator",
            id: {
              type: "identifier",
              name: tokens[current].value,
            },
            init: {},
          },
        ];

        current++;
        let init = {
          type: "literal",
          value: tokens[current].value,
        };

        declarations[0].init = init;
        branch.declarations = declarations;
      }
    }
  }
};
