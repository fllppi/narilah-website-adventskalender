import { Container, Group, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import classes from '../styles/Hero.module.css';
import Narilah from '../assets/narilah.jpg';
import NarilahVideo from '../assets/narilah.mp4';

export function Hero() {
    const isMobile = useMediaQuery(`(max-width: 900px)`); 
    return (
        <>
            <video autoPlay muted loop className={classes.video}>
                <source src={NarilahVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {isMobile &&
            <Container size="md" className={classes.inner}>
                <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }} size="sm">
                    <img src={Narilah} alt="Narilah" className={classes.picture} style={{ marginBottom: 30, width: "20vh" }} />
                    <Container size="sm" className={classes.about + " " + classes.mobile}>
                        <Title order={1} className={classes.mobileTitle}>
                            Narilah
                        </Title>
                        <Title order={2} className={classes.mobileSubtitle}>
                            🎥 Streamerin
                        </Title>
                        <Title order={2} className={classes.mobileSubtitle}>
                            🎧 DJane
                        </Title>
                    </Container>
                </Container>
            </Container>
            }
            {!isMobile &&
            <Container size="md" className={classes.inner}>
                <Group gap={100}>
                    <img src={Narilah} alt="Narilah" className={classes.picture} />
                    <Container size="sm" className={classes.about}>
                        <Title order={1} className={classes.title}>
                            Narilah
                        </Title>
                        <Title order={2} className={classes.subtitle}>
                            🎥 Streamerin
                        </Title>
                        <Title order={2} className={classes.subtitle}>
                            🎧 DJane
                        </Title>
                    </Container>
                </Group>
            </Container>
            }
        </>
    );
}
