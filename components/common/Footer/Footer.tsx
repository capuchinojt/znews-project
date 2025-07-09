import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        py: { xs: 2, md: 2 },
        mt: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: { md: 'flex-end' }, textAlign: { xs: 'center', md: 'left' } }}>
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box>
              <Typography
                variant="caption"
                component="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#666',
                  mb: 1,
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                }}
              >
                Tạp chí điện tử Tri Thức
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1,
                  mb: 1,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                Cơ quan chủ quản: Hội Xuất bản Việt Nam
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1.6,
                  mb: 1,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                Giấy phép báo chí: số 75/GP-BTTTT và số 442/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 và ngày 29/11/2023
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1,
                  mb: 1,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                Phó tổng biên tập phụ trách: NĐHuy
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontWeight: 'medium',
                  mt: 2,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                © Toàn bộ bản quyền thuộc nđhuy
              </Typography>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1,
                  mb: 1,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                <Box component="span">
                  Tòa soạn:
                </Box>{' '}
                Tân Sơn Nhì, Tân Phú, TP.HCM
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1,
                  mb: 1,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                <Box component="span">
                  Hotline:
                </Box>{' '}
                <Box
                  component="a"
                  href="tel:0522633223"
                  sx={{
                    color: '#1976d2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  0522.633.223
                </Box>
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  lineHeight: 1,
                  fontSize: { xs: '0.6rem', md: '0.7rem' },
                }}
              >
                <Box component="span">
                  Liên hệ:
                </Box>{' '}
                <Box
                  component="a"
                  href="mailto:ndhuy.1011@gmail.com"
                  sx={{
                    color: '#1976d2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  ndhuy.1011@gmail.com
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
