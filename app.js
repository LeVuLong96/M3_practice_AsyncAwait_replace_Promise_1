async function findQuotient(a, b) {
    if (b !== 0) {
        return (a/b);
    }
    throw new Error('no solution!!!!!!!!!!!!!');
}

async function f() {
    try {
        let result = await findQuotient(10, 1);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

f()