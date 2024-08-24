import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import DaysCalculator from './components/DaysCalculator';
import BMICalculator from './components/BMICalculator';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // A professional blue color
        },
        background: {
            default: '#f5f5f5', // Light gray background
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Prevents all-caps button text
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .03)',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Box sx={{
                        minHeight: '100vh',
                        bgcolor: 'background.default',
                        pt: 4,
                    }}>
                        <div className="App">
                            <Routes>
                                <Route path="/" element={<MainMenu />} />
                                <Route path="/days-calculator" element={<DaysCalculator />} />
                                <Route path="/bmi-calculator" element={<BMICalculator />} />
                            </Routes>
                        </div>
                    </Box>
                </Router>
        </ThemeProvider>
    );
}

export default App;
