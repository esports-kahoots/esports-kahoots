import isElectron from 'is-electron';
import { useColorMode } from 'native-base';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Profile from './Screens/Profile/Profile';

function App() {
    const { colorMode } = useColorMode();

    const Router = isElectron() ? HashRouter : BrowserRouter;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
