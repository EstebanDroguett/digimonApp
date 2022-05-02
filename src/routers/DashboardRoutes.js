import { Routes, Route } from 'react-router-dom';

import { NavBar } from '../components/navbar/NavBar';

import { Fresh } from '../components/fresh/Fresh';
import { Training } from '../components/training/Training';
import { Rookie } from '../components/rookie/Rookie';
import { Champion } from '../components/champion/Champion';
import { Ultimate } from '../components/ultimate/Ultimate';
import { Mega } from '../components/mega/Mega';

import { Search } from '../components/search/Search';
import { DigimonScreen } from '../components/digimons/DigimonScreen';
import { DigimonHome } from '../components/digimons/DigimonHome';


export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="home" element={<DigimonHome />} />
                    <Route path="fresh" element={<Fresh />} />
                    <Route path="training" element={<Training />} />
                    <Route path="rookie" element={<Rookie />} />
                    <Route path="champion" element={<Champion />} />
                    <Route path="ultimate" element={<Ultimate />} />
                    <Route path="mega" element={<Mega />} />

                    <Route path="search" element={<Search />} />
                    <Route path="digimon/:digimonName" element={<DigimonScreen />} />

                    <Route path="*" element={<DigimonHome />} />

                </Routes>
            </div>
        </>
    )
}
