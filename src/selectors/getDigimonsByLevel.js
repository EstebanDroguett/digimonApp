import { digimons } from '../data/data';

export const getDigimonsByLevel = ( level ) => {

    const validLevels = ['Fresh','Training', 'Rookie', 'Champion', 'Ultimate', 'Mega'];
    if( !validLevels.includes( level ) ) {
        throw new Error( `${ level } is not a valid level` );
    }

    return digimons.filter( digimon => digimon.level === level );
}
