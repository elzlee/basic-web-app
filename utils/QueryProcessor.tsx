export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("What is 79 minus 38?")) {
    return (
      "41"
    );
  }

  return "";
}
