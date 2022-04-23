import { digimons } from '../data/data';

export const getDigimonsByName = ( name = '') => {
    
    console.log('getDigimonsByName called');

    if ( name.length === 0 ) {
        return [];
    }

    name = name.toLowerCase();
    return digimons.filter(digimon => digimon.name.toLowerCase().includes(name));

}