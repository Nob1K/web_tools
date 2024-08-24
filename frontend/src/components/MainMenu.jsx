import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Paper, Grid } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const MainMenu = () => {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                    My Personal Tools Suite
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <MotionButton
                            component={Link}
                            to="/days-calculator"
                            variant="outlined"
                            startIcon={<CalculateIcon />}
                            fullWidth
                            size="large"
                            sx={{ py: 2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Days Calculator
                        </MotionButton>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MotionButton
                            component={Link}
                            to="/bmi-calculator"
                            variant="outlined"
                            startIcon={<FitnessCenterIcon />}
                            fullWidth
                            size="large"
                            sx={{ py: 2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            BMI Calculator
                        </MotionButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default MainMenu;