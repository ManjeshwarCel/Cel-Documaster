const a1 = ['name', 'age', 'city'];
const a2 = ['Ajay', 25, 'New Delhi'];

const res = Object.fromEntries(a1.map((key, index) =>
    [key, a2[index]]));

console.log('Result:' +res);
