import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container, Typography, TextField, Button, Box,
    FormControl, InputLabel, Select, MenuItem, Paper, IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [height, setHeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [result, setResult] = useState(null);

    const calculateBMI = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/bmi-calculator`, {
                params: {
                    weight,
                    weightUnit,
                    height,
                    heightUnit
                }
            });
            setResult(response.data);
        } catch (error) {
            console.error('Error calculating BMI:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <IconButton
                    component={Link}
                    to="/"
                    sx={{ position: 'absolute', top: 8, left: 8 }}
                    aria-label="back to main menu"
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                    BMI Calculator
                </Typography>
                <Box sx={{ width: '100%', mt: 2 }}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                        <TextField
                            label="Weight"
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            sx={{ flexGrow: 1, mr: 1 }}
                        />
                        <FormControl sx={{ minWidth: 80 }}>
                            <InputLabel>Unit</InputLabel>
                            <Select
                                value={weightUnit}
                                onChange={(e) => setWeightUnit(e.target.value)}
                                label="Unit"
                            >
                                <MenuItem value="kg">kg</MenuItem>
                                <MenuItem value="lbs">lbs</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                        <TextField
                            label="Height"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            sx={{ flexGrow: 1, mr: 1 }}
                        />
                        <FormControl sx={{ minWidth: 80 }}>
                            <InputLabel>Unit</InputLabel>
                            <Select
                                value={heightUnit}
                                onChange={(e) => setHeightUnit(e.target.value)}
                                label="Unit"
                            >
                                <MenuItem value="cm">cm</MenuItem>
                                <MenuItem value="inches">inches</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button variant="contained" onClick={calculateBMI} fullWidth>
                        Calculate
                    </Button>
                </Box>
                {result !== null && (
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Your BMI: {result.toFixed(2)}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default BMICalculator;