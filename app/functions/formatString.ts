export default function formatString(string: string) {
  return string
    .replace(/[^a-zA-Z0-9\sø]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}
