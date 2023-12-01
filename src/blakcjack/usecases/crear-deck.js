import _ from 'underscore';


/** //esto se usa para documentar las funciones y agregar los tipos de datos q se esperan
 * 
 * @param {Array <string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tipos de carta es obligatorio');
    if ( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tipos de carta especiales es obligatorio');

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