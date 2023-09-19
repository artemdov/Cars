import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {CarListPage} from "./pages/CarListPage/CarListPage";
import {CarDetailsPage} from "./pages/CarDetailsPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<CarListPage/>}/>
                <Route path='/cars/:model' element={<CarDetailsPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
