"use client";

import React, { useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Link from 'next/link';
import MainVideoPlayer from '../MainVideoPlayer';
import VideoCard from '../VideoCard';
import { VideoItem, VideoSectionProps } from '@/lib/types/video';

export default function VideoSection({ videos, title = "VIDEO" }: VideoSectionProps) {
  const [currentVideo, setCurrentVideo] = useState<VideoItem>(videos[0]);

  const handleVideoSelect = (video: VideoItem) => {
    setCurrentVideo(video);
  };

  const handlePlayVideo = () => {
    // Placeholder for video play functionality
    console.log('Playing video:', currentVideo.title);
    // In a real implementation, this would open a video modal or navigate to video page
  };

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Link
          href="/videos"
          passHref
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              pl: 1,
              pb: 1,
              mb: 3,
              color: '#333',
              cursor: 'pointer',
              '&:hover': {
                color: '#1976d2',
              },
            }}
          >
            <span style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>
              /
            </span>{' '}
            {title}
          </Typography>
        </Link>

        <Grid container spacing={3}>
          {/* Main Video Player - Left Side */}
          <Grid size={{ xs: 12, md: 8 }}>
            <MainVideoPlayer
              video={currentVideo}
              onPlay={handlePlayVideo}
            />
          </Grid>

          {/* Video List - Right Side */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                maxHeight: { md: 420 },
                overflowY: 'auto',
                pr: { md: 1 },
                '&::-webkit-scrollbar': {
                  width: 6,
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#f1f1f1',
                  borderRadius: 3,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#c1c1c1',
                  borderRadius: 3,
                  '&:hover': {
                    backgroundColor: '#a8a8a8',
                  },
                },
              }}
            >
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  isActive={video.id === currentVideo.id}
                  onClick={() => handleVideoSelect(video)}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
