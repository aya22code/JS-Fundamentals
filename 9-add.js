const args = process.argv.slice(2);

function add(a, b) {
    return a + b;
}

console.log(add(Number(args[0]), Number(args[1])));