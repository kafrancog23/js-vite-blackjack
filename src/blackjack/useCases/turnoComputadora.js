import { pedirCarta } from "./pedirCarta.js";
import { valorCarta } from "./valorCarta.js";
import { crearCarta } from "./crearCarta.js";
/**
 * 
 * @param {Number} puntosMinimos puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elementoHTML para mostrar las cartas
 * @param {Array} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {
    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML son necesarios')
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta(carta)
        imgCarta.src = `./assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}