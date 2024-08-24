import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const MainMenu = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Tools
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Tools offered currently:
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            component={Link}
                            to="/days-calculator"
                            variant="contained"
                            startIcon={<CalculateIcon />}
                            fullWidth
                        >
                            Days Calculator
                        </Button>
                        <Button
                            component={Link}
                            to="/bmi-calculator"
                            variant="contained"
                            startIcon={<FitnessCenterIcon />}
                            fullWidth
                        >
                            BMI Calculator
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default MainMenu;