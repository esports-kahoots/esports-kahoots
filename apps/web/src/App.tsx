import isElectron from 'is-electron';
import { useColorMode } from 'native-base';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Profile from './Screens/Profile/Profile';
import CodeScreen from './Screens/CodeScreen/CodeScreen';

function App() {
    const { colorMode } = useColorMode();

    const Router = isElectron() ? HashRouter : BrowserRouter;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/codescreen" element={<CodeScreen code={"ABCDEF"} />} />
            </Routes>
        </Router>
    );
}

export default App;
