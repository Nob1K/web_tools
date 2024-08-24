import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Paper, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DaysCalculator = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState(null);

    const calculateDays = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/days-calculator?startDate=${startDate}&endDate=${endDate}`);
            setResult(response.data);
        } catch (error) {
            console.error('Error calculating days:', error);
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
                    Days Calculator
                </Typography>
                <Box sx={{ width: '100%', mt: 2 }}>
                    <TextField
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        sx={{ width: '100%', mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="End Date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        sx={{ width: '100%', mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button variant="contained" onClick={calculateDays} fullWidth>
                        Calculate
                    </Button>
                </Box>
                {result !== null && (
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Days between: {result}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default DaysCalculator;