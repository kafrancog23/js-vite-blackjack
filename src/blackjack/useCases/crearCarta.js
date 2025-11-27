/**
 * 
 * @param {String} String carta
 * @param {Number} carta valor carta
 */
export const crearCarta = (carta) => {
    if(!carta) throw new Error('carta es obligatorio')
    const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        
    return imgCarta;
}