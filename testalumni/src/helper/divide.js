export default function divide(n1, n2) 
{
    // si alguno no es número, devuelve null
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return null;
    }

    // si intenta dividir un número entre 0, también devuelve null
    if (n2 === 0) {
        return null;
    }

    // Como resultado final devolvemos el resultado de la división
    return n1 / n2;
}
