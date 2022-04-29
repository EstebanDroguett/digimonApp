import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getDigimonsByName } from '../../selectors/getDigimonsByName';
import { DigimonCard } from '../digimons/DigimonCard';
import { Loading } from '../loading/Loading';

export const Search = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const digimonsFileted = useMemo(() => getDigimonsByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <div>
            <div className='text-center'>
                <h1>Search</h1>
                <hr />
                {
                    loading && <Loading setLoading={setLoading} />
                }

                {
                    !loading &&

                    <div className="row text-center">

                        <div className="col-6 animate__animated animate__fadeInLeft">
                            <h4>Search</h4>
                            <hr />

                            <form onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    placeholder="Search Digimon"
                                    className="form-control"
                                    name="searchText"
                                    autoComplete="off"
                                    value={searchText}
                                    onChange={handleInputChange}
                                />
                                <button
                                    className="btn btn-outline-primary mt-1"
                                    type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="col-6 animate__animated animate__fadeInRight">
                            <h4>Result</h4>
                            <hr />


                            {
                                (q === '')
                                    ? <div className="alert alert-info"> Search Digimon </div>
                                    : (digimonsFileted.length === 0)
                                    && <div className="alert alert-danger"> Not result: {q} </div>
                            }

                            {
                                digimonsFileted.map(digimon => (
                                    <DigimonCard
                                        key={digimon.name}
                                        {...digimon}
                                    />
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}
