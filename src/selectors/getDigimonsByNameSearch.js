import { digimons } from '../data/data';

export const getDigimonsByNameSearch = ( name = '' ) => {
    console.log('getDigimonsByNameSearch called');
    return digimons.find( digimon => digimon.name === name );
}