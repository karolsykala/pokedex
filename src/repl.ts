import * as readline from "readline";

export function StartREPL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  
}


export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(" ").map(data => data.trim()).filter(data => data.length > 0)
}
