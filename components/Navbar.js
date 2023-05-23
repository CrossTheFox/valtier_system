import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid';
import styles from '../styles/ResponsiveAppBar.module.css';
import CircleDecoration from './DesignComponents/CircleDecoration.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function ResponsiveAppBar() {
    return (
        <AppBar position="static" sx={{ 
            background: 'linear-gradient(150deg, rgba(255,56,101,1) 67%, rgba(0,0,0,1) 72%)',
            }}>
                <Toolbar>
                <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexGrow: 1,
                        '@media (max-width: 600px)': {
                            justifyContent: 'center',
                        },
                    }}>
                    <Link href="/">
                        <Image src="/LogoNormal.png" alt="Logo" width={200} height={70} />
                    </Link>
                </Box>
                </Toolbar>
                <CircleDecoration
                    position={{ top: '50px', left: '72%' }}
                    size={{ width: '30px', height: '30px' }}
                    gradient="radial-gradient(circle, rgba(255, 56, 101, 1) 0%, rgba(255, 56, 101, 0) 70%)"
                />
                <CircleDecoration
                    position={{ top: '55px', left: '78%' }}
                    size={{ width: '20px', height: '20px' }}
                    gradient="radial-gradient(circle, rgba(255, 56, 101, 1) 0%, rgba(255, 56, 101, 0) 70%)"
                />
        </AppBar>
    );
  }

export default ResponsiveAppBar;

