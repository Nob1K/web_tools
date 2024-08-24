import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import DaysCalculator from './components/DaysCalculator';
import BMICalculator from './components/BMICalculator';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    // Add other theme configurations here
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainMenu />} />
                        <Route path="/days-calculator" element={<DaysCalculator />} />
                        <Route path="/bmi-calculator" element={<BMICalculator />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
