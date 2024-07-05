import { Token } from "../types/token";

export function tokenizer(input: string) {
  let current = 0;

  const tokens: Token[] = [];
  const tokenType = {
    null: /^\s+/, // Whitespace
    NUMBER: /^\d+/, // Numbers
    IDENTIFIER: /^[a-zA-Z_]\w*/, // Identifiers
    EQUAL: /^=/,
    PLUS: /\+/,
    MINES: /\-/,
    MULTIPLE: /\*/,
    COTATION: /\"/g,
    SINGLECOTATION: /\'/g,
    OPENPARENTHESIS: /\(/g,
    CLOSEPARENTHESIS: /\)/g,
    OPENBRACKET: /\[/g,
    CLOSEBRACKET: /\]/g,
    OPENBCURLYRACKET: /\{/g,
    CLOSECURLYBRACKET: /\}/g,
    COMMA: /\,/g,
    DOT: /\./g,
    SEMICOLON: /\;/g,
    COLON: /\:/g,
  };

  while (input[current] && current < input.length) {
    // idendifiers
    if (tokenType.IDENTIFIER.exec(input[current])) {
      let word: string = "";

      while (
        current < input.length &&
        input[current].match(tokenType.IDENTIFIER)
      ) {
        word += input[current];
        current++;
      }

      tokens.push({ type: "IDENTIFIER", value: word });

      continue;
    }

    //numbers
    if (tokenType.NUMBER.exec(input[current])) {
      let numb: string = "";

      while (current < input.length && input[current].match(tokenType.NUMBER)) {
        numb += input[current];
        current++;
      }
      tokens.push({ type: "NUMBER", value: numb });
      continue;
    }

    //null
    if (tokenType.null.exec(input[current])) {
      current++;
      continue;
    }

    //equal
    if (tokenType.EQUAL.exec(input[current])) {
      tokens.push({ type: "EQUAL", value: input[current] });
      current++;
      continue;
    }

    //COTATION
    if (tokenType.COTATION.exec(input[current])) {
      tokens.push({ type: "COTATION", value: input[current] });
      current++;
      continue;
    }

    //SINGLECOTATION
    if (tokenType.SINGLECOTATION.exec(input[current])) {
      tokens.push({ type: "SINGLECOTATION", value: input[current] });
      current++;
      continue;
    }

    //OPENPARENTHESIS
    if (tokenType.OPENPARENTHESIS.exec(input[current])) {
      tokens.push({ type: "OPENPARENTHESIS", value: input[current] });
      current++;
      continue;
    }

    //CLOSEPARENTHESIS
    if (tokenType.CLOSEPARENTHESIS.exec(input[current])) {
      tokens.push({ type: "CLOSEPARENTHESIS", value: input[current] });
      current++;
      continue;
    }

    //OPENBRACKET
    if (tokenType.OPENBRACKET.exec(input[current])) {
      tokens.push({ type: "OPENBRACKET", value: input[current] });
      current++;
      continue;
    }

    //CLOSEBRACKET
    if (tokenType.CLOSEBRACKET.exec(input[current])) {
      tokens.push({ type: "CLOSEBRACKET", value: input[current] });
      current++;
      continue;
    }

    //OPENBCURLYRACKET
    if (tokenType.OPENBCURLYRACKET.exec(input[current])) {
      tokens.push({ type: "OPENBCURLYRACKET", value: input[current] });
      current++;
      continue;
    }

    //CLOSECURLYBRACKET
    if (tokenType.CLOSECURLYBRACKET.exec(input[current])) {
      tokens.push({ type: "CLOSECURLYBRACKET", value: input[current] });
      current++;
      continue;
    }

    //COMMA
    if (tokenType.COMMA.exec(input[current])) {
      tokens.push({ type: "COMMA", value: input[current] });
      current++;
      continue;
    }

    //DOT
    if (tokenType.DOT.exec(input[current])) {
      tokens.push({ type: "DOT", value: input[current] });
      current++;
      continue;
    }

    //SEMICOLON
    if (tokenType.SEMICOLON.exec(input[current])) {
      tokens.push({ type: "SEMICOLON", value: input[current] });
      current++;
      continue;
    }

    //COLON
    if (tokenType.COLON.exec(input[current])) {
      tokens.push({ type: "COLON", value: input[current] });
      current++;
      continue;
    }

    //PLUS
    if (tokenType.PLUS.exec(input[current])) {
      tokens.push({ type: "PLUS", value: input[current] });
      current++;
      continue;
    }

    //MINES
    if (tokenType.MINES.exec(input[current])) {
      tokens.push({ type: "MINES", value: input[current] });
      current++;
      continue;
    }

    //MULTIPLE
    if (tokenType.MULTIPLE.exec(input[current])) {
      tokens.push({ type: "MULTIPLE", value: input[current] });
      current++;
      continue;
    }
  }

  return tokens;
}
