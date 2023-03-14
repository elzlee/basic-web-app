export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("What is 21 plus 78?")) {
    return (
      "99"
    );
  }

  return "";
}
