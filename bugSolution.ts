function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works fine
printName('John'); // Works fine

const names: (string | null)[] = ['John', null, 'Jane'];

names.forEach(name => {
  // Solution 1: Type Assertion
  printName(name as string); 
  // Solution 2: Optional Chaining (more robust)
  name && printName(name);
});
