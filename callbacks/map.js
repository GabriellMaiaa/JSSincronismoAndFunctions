const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((n) => {
    return n + 1 >=10 ? 10 : n + 1;
})
console.log(notasAtualizadas)