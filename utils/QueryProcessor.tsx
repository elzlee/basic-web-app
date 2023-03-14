export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "lizzie"
    );
  }

  return "";
}
