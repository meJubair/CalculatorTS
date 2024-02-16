
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import * as math from 'mathjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Copyright component for footer
function Copyright() {
    return (
      <Typography variant="body2" color="text.inherit">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/meJubair">
        Jubair
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

// Theme for the Calculator
const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#1976d2'
            }
        }
    }
);

// Calculator component
const Calculator: React.FC = () => {


    // State for the input
    const [input, setInput] = useState<string>('');

    // useEffect for keyboard input event listener updates the input state when a key is pressed
    useEffect(() => {

        // Event listener for keyboard input
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.key >= '0' && event.key <= '9') || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
                setInput(input + event.key);
            } else if (event.key === 'Enter') {
                handleCalculate();
            } else if (event.key === 'Escape') {
                handleClear();
            } else if (event.key === 'Backspace') {
                handleBackspace();
            }
        };

        // Add event listener to the window object for keyboard input
        window.addEventListener('keydown', handleKeyDown);

        // Remove event listener when component is unmounted
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [input]);

    // Event handlers for the calculator buttons
    const handleClick = (value: string) => {
        setInput(input + value);
    };

    // Clear the input
    const handleClear = () => {
        setInput('');
    };

    // Calculate the result
    const handleCalculate = () => {
        try {
            const result = math.evaluate(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    // Backspace
    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
            container 
            spacing={1} 
            alignItems="center" 
            justifyContent="center" 
            sx={{display:'flex', justifyContent:'center', alignItems:'center', margin:'0 auto', height:'80%', aspectRatio:'2/3', background:'aliceblue', border:'0.5rem double #1976d2', padding:'1rem', borderRadius:'10px'}}
            >
            <Grid item xs={12} sx={{ p: 1, mx: 'auto', backgroundColor:'aliceblue' }}>
                    <Typography 
                        variant='h3' 
                        sx={{m:'0', p:'0', color:'#1976d2', fontFamily: 'Orbitron, sans-serif', fontSize:'2.5rem', fontWeight:'bold'}}>
                            Simple Calculator
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ p: 1, fontFamily: 'Electrolize, sans-serif' }}>
                    <TextField
                        variant="outlined"
                        /* fullWidth */
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        sx={{border:'2px solid', borderRadius:'6px', padding:'0rem', textAlign:'right', accentColor:'#1976d2', width: '100%', margin:'0 auto', 
                        backgroundColor:'aliceblue', color:'#1976d2', fontFamily: 'Electrolize, sans-serif', fontSize:'1.5rem'}}
                    />
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('1')}>
                        1
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('2')}>
                        2
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('3')}>
                        3
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('+')}>
                        +
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('4')}>
                        4
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('5')}>
                        5
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('6')}>
                        6
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('-')}>
                        -
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('7')}>
                        7
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('8')}>
                        8
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('9')}>
                        9
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('*')}>
                        x
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('0')}>
                        0
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClear()}>
                        C
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleCalculate()}>
                        =
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ p: 1 }}>
                    <Button variant="contained" fullWidth onClick={() => handleClick('/')}>
                        ÷
                    </Button>
                </Grid>

                <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    bgcolor: '#1976d2'
                }}
                >
                <Container maxWidth="sm">
                    {/* <Typography variant="body1">
                        Developed by <Link href="https://github.com/meJubair" color="inherit">Jubair</Link>
                    </Typography> */}
                    <Copyright />
                </Container>
        </Box>
            </Grid>

            
        </ThemeProvider>
    );
};

export default Calculator;
