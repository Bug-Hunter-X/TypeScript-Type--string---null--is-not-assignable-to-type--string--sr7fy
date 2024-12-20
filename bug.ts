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
  printName(name); // Type 'string | null' is not assignable to type 'string'.
});
