import { Hero } from '../components/Hero';
import Snowfall from 'react-snowfall';
import { useMediaQuery } from '@mantine/hooks';
export function Homepage() {
    document.title = 'Narilah';
    const isMobile = useMediaQuery(`(max-width: 900px)`); 
    return (
        <>
            <Snowfall snowflakeCount={
                isMobile ? 150 : 700
            } style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: '1' }} />
            <Hero />
        </>
    );
}
