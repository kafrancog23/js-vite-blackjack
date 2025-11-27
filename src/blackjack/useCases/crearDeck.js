/**
 * 
 * @param {Array<String>} tiposDeCarta ejemplo ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo ['A','J','Q','K'];
 * @returns {Array<String>} regresa un nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error ('Tipos de carta es obligatorio')
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error ('Tipos de carta es obligatorio')
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

