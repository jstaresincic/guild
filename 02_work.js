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

// Create a context function that sets strategy and compresses data

// Example usage
[
  "Loerm ipsum",
  "dolor sit amet",
  "consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt",
  "ut labore et dolore magna aliqua",
].forEach((data, index) => {
  printData(context.compress(data));
  if (index === 1) {
    context.setStrategy(compressWithGZIP);
  }
});
