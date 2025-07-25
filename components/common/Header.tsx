import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';

import NavDrawer from './NavDrawer';
import SearchIconButton from './SearchIconButton';

export default function Header() {
  const navItems = ['Xuất bản', 'Tác giả', 'Kinh doanh', 'Thể thao', 'Công nghệ', 'Sức khỏe', 'Đời sống', 'Giải trí'];

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar sx={{ backgroundColor: '#fff', boxShadow: 'none', minHeight: { xs: 56, md: 64 } }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', px: { xs: 0, sm: 2 } }}>
          {/* Menu icon for mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <NavDrawer />
          </Box>

          {/* Logo */}
          <Link href="/" passHref>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 2 }}>
              <Image src="/logo-znews-light-2.svg" alt="Znews Logo" width={200} height={100} style={{ objectFit: 'contain' }} />
            </Box>
          </Link>

          {/* Navigation Items - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'text.primary',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#3399cc',
                    borderBottom: '4px solid',
                  },
                }}
              >
                {item}
              </Button>
            ))}
            <Box sx={{ ml: 2 }}>
              <NavDrawer />
            </Box>
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchIconButton />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
