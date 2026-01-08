const args = process.argv.slice(2);

const n = parseInt(args[0]);

function factorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    }

    return x * factorial(x - 1)
}

if (isNaN(n) || n < 0) {
    console.log(1);
} else {
    console.log(factorial(n));
}