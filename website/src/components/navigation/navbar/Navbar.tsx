import { css } from '@/panda/css'
import { Box, Container, HStack } from '@/panda/jsx'
import Link from 'next/link'
import { ColorModeButton } from './ColorModeButton'
import { Logo } from './Logo'

export const Navbar = () => (
  <nav
    role="navigation"
    className={css({
      position: 'sticky',
      top: '0',
      background: 'bg.canvas',
      borderBottomWidth: '1px',
      zIndex: '100',
    })}
  >
    <Container className={css({ minH: '68px', display: 'flex' })}>
      <HStack justify="space-between" flex="1">
        <Link href="/" aria-label="Back home">
          <Logo />
        </Link>
        {/* @ts-expect-error */}
        <Box
          bg="bg.subtle"
          borderWidth="1px"
          h="9"
          width="320px"
          borderRadius="sm"
          display={{ base: 'none' }}
        />
        <ColorModeButton />
      </HStack>
    </Container>
  </nav>
)