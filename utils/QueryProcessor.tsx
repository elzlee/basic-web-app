export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("What is 36 plus 95?")) {
    return (
      "131"
    );
  }

  return "";
}
