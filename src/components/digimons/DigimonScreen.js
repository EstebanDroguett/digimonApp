import { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getDigimonsByNameSearch } from '../../selectors/getDigimonsByNameSearch';
import { Loading } from '../loading/Loading';

export const DigimonScreen = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const { digimonName } = useParams();
    const navigate = useNavigate()
    const digimonData = useMemo(() => getDigimonsByNameSearch(digimonName), [digimonName]);



    const handleReturn = () => {
        navigate(-1);
    }


    if (!digimonData) {
        return <Navigate to='/' />
    }

    const {
        name,
        img,
        level
    } = digimonData;


    return (

        <div className='text-center'>
            {
                loading && <Loading setLoading={setLoading} />
            }
            {
                !loading &&
                <div className="row mt-5">
                    <div className="col-4">
                        <img
                            src={img}
                            alt={name}
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                    </div>
                    <div className="col-8 animate__animated animate__fadeIn">
                        <h3>{digimonData.name}</h3>
                        <h5 className="mt-3">Level</h5>
                        <p>{level}</p>
                        <button
                            className="btn btn-outline-info"
                            onClick={handleReturn}
                        >
                            Back
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}
