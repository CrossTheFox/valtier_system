import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Layout from '../components/Layout';
import Body from '../components/Body';

export default function Home() {
	return(
		<Layout>
			<Body />
		</Layout>
	)
}
