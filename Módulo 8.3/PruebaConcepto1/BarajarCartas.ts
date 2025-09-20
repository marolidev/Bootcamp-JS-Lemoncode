const animales = ["🦁", "🦉", "🐶", "🐔", "🐷", "🐝"];

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result;
}

console.log("Original:", animales);
console.log("Barajado:", shuffleArray(animales));
