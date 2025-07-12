export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(" ").map(data => data.trim()).filter(data => data.length > 0)
}
