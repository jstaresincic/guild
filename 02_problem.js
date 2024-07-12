// Compression functions
function compressWithZIP(data) {
  // Implementation logic for ZIP compression
  return "Compressed using ZIP";
}
function compressWithGZIP(data) {
  // Implementation logic for GZIP compression
  return "Compressed using GZIP";
}
const printData = (data) => console.log(data);

// Example usage
[
  "Loerm ipsum",
  "dolor sit amet",
  "consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt",
  "ut labore et dolore magna aliqua",
].forEach((data, index) => {
  if (index < 2) {
    return printData(compressWithZIP(data));
  }
  printData(compressWithGZIP(data));
});
