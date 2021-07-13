function multiTable(n) {
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${i} * ${n} = ${i * n}`
        if (i < 10) res += "\n"
    }
    return res;
}
/*
function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}
*/
