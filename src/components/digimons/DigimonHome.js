import { DigimonCard } from './DigimonCard';
import { digimons } from '../../data/data';
import { Loading } from '../loading/Loading';
import { useEffect, useState } from 'react';

export const DigimonHome = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <div className='text-center'>
                <h1>Digimon</h1>
                <hr />
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
        </>
    )
}
