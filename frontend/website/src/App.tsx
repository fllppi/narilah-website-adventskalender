import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppShell, MantineProvider, Group, Burger, UnstyledButton, Container } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useDisclosure } from '@mantine/hooks';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { IconBrandTwitch } from '@tabler/icons-react';

import NarilahLogo from './assets/logo-white.svg';
import headerclasses from './styles/Header.module.css';
import navbarclasses from './styles/Navbar.module.css';

import { Footer } from './components/Footer'

import { Homepage } from './pages/Homepage'
import { Adventskalender } from './pages/Adventskalender'
import { NotFound } from './pages/NotFound'

const headerLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Adventskalender",
    link: "/adventskalender",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/narilah",
  }
]

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <MantineProvider forceColorScheme="dark">
        <Notifications position="bottom-right" zIndex={1000} />
        <AppShell
          header={{ height: 100 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
          padding="md"
          footer={{ height: 60 }}
        >
          <AppShell.Header>
            <header className={headerclasses.header}>
              <Container size="md" className={headerclasses.inner}>
                <img src={NarilahLogo} alt="Narilah Logo" className={headerclasses.logo} />
                <Group ml="xl" gap={0} visibleFrom="sm">
                  {headerLinks.map((link) => (
                    <UnstyledButton
                      key={link.name}
                      component='a'
                      href={link.link}
                      rel="noopener noreferrer"
                      className={headerclasses.link + (link.link === window.location.pathname ? " " + headerclasses.active : "")}
                    >
                      {link.name === "Twitch" && <IconBrandTwitch size={15} style={{ marginRight: 5 }} />}
                      {link.name}
                    </UnstyledButton>
                  ))}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              </Container>
            </header>
          </AppShell.Header>
          <AppShell.Navbar>
            {headerLinks.map((link) => (
              <Container size="md" className={navbarclasses.links} key={'navbar-' + link.name}>
                <UnstyledButton
                  key={link.name}
                  component='a'
                  href={link.link}
                  rel="noopener noreferrer"
                  className={navbarclasses.link + (link.link === window.location.pathname ? " " + navbarclasses.active : "")}
                >
                  {link.name}
                </UnstyledButton>
              </Container>
            ))}
          </AppShell.Navbar>
          <AppShell.Main>
            <BrowserRouter>
              <Routes>
                <Route path="*" Component={NotFound} />
                <Route path="/" Component={Homepage} />
                <Route path="/adventskalender" Component={Adventskalender} />
              </Routes>
            </BrowserRouter>
          </AppShell.Main>
          <AppShell.Footer>
            <Footer />
          </AppShell.Footer>
        </AppShell>
      </MantineProvider>
    </>
  )
}

export default App
