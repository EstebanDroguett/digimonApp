import { useEffect, useState } from 'react';
import { Loading } from '../components/loading/Loading';

export const GetDigimon = ({ setDigimons, name = 'greymon' }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://digimon-api.vercel.app/api/digimon/name/${name}`
                );
                if (response.ok) {

                    const data = await response.json();
                    setTimeout(() => {
                        setDigimons(data) // ⬅️ Guardar datos
                        setLoading(false)
                    }, 2000);

                } else {
                    console.error("Hubo un error al obtener el digimon");
                }
            } catch (error) {
                console.error("No pudimos hacer la solicitud para obtener el digimon");
            }
        }
        getData();
    }, [setDigimons, name]);

    return (

        <div>
            { loading && <Loading /> }
        </div>

    )
}
