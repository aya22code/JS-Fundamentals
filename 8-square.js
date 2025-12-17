const args = process.argv.slice(2);
if (isNaN(args[0])) {
    console.log('Missing size');
} else {
    const size = parseInt(args[0]);
    for (let i = 0; i < size; i++) { // rows
        let row = '';
        for (let j = 0; j < size; j++) { // columns
            row += 'X';
        }
        console.log(row);
    }
}