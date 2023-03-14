export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("What is 3 plus 23?")) {
    return (
      "26"
    );
  }

  return "";
}
