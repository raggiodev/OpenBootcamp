// Ejercicio 12 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
function fibonacci(num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    
    let list = [1, 1]

    for (let i = 2; i < num; i++) {
        list.push(list[i - 1] + list[i - 2])
    }
    return list
};

console.log(fibonacci(16)); // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987 ]
console.log(`Resultado: ${fibonacci(16)}`); // Resultado: 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987
