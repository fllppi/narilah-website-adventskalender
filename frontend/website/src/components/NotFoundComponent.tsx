import { Container, Text, Title } from '@mantine/core';

import classes from '../styles/NotFound.module.css';

export function NotFoundComponent() {
    return (
        <Container ta="center" size="sm" className={classes.NotFound}>
            <Title order={1}>404 - Not Found</Title>
            <Text>
                Die Seite konnte nicht gefunden werden.
            </Text>
        </Container>
    );
}