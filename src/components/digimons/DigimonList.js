import React, { useEffect, useMemo, useState } from 'react';
import { DigimonCard } from './DigimonCard';
import { getDigimonsByLevel } from '../../selectors/getDigimonsByLevel';
import { Loading } from '../loading/Loading';

export const DigimonList = ({ level }) => {

    const digimons = useMemo(() => getDigimonsByLevel(level), [level]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    return (
            <div className='text-center'>
                {
                    loading && <Loading setLoading={setLoading} />
                }
                {
                    !loading && <div className='card-grid'>
                        {
                            digimons.map(digimon => {
                                return (
                                    <DigimonCard
                                        key={digimon.name}
                                        {...digimon}
                                    />
                                );
                            })
                        }
                    </div>
                }
            </div>
    )
}
