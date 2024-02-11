import { Space } from '@mantine/core';

import Snowfall from 'react-snowfall';
import { useMediaQuery } from '@mantine/hooks';

import { Kalender, KalenderTitle } from '../components/Kalendar';

export function Adventskalender() {
    document.title = "Narilah - Adventskalender"
    const isMobile = useMediaQuery(`(max-width: 900px)`); 
    return (
        <>
            <Snowfall snowflakeCount={
                isMobile ? 150 : 1000
            } style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: '1' }} />
            <KalenderTitle />
            <Space h="lg" />
            <Kalender />
        </>
    )
}
