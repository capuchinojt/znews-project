import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { VideoItem } from '@/lib/types/video';

interface MainVideoPlayerProps {
  video: VideoItem;
  onPlay?: () => void;
}

export default function MainVideoPlayer({ video, onPlay }: MainVideoPlayerProps) {
  const formatViews = (views?: number) => {
    if (!views) return '';
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M lượt xem`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K lượt xem`;
    }
    return `${views} lượt xem`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Box>
      {/* Main Video Thumbnail */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 200, sm: 300, md: 350 },
          borderRadius: 2,
          overflow: 'hidden',
          cursor: 'pointer',
          mb: 2,
          '&:hover .play-button': {
            transform: 'scale(1.1)',
          },
        }}
        onClick={onPlay}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${video.thumbnailUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Play Button - Center */}
        <IconButton
          className="play-button"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#1976d2',
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            transition: 'all 0.3s ease',
          }}
        >
          <PlayArrowIcon sx={{ fontSize: { xs: 32, md: 40 } }} />
        </IconButton>

        {/* Duration */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.875rem',
            fontWeight: 'bold',
          }}
        >
          {video.duration}
        </Box>

        {/* Category Tag */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            backgroundColor: '#1976d2',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          {video.category}
        </Box>
      </Box>

      {/* Video Info */}
      <Box>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'bold',
            lineHeight: 1.3,
            mb: 1,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
          }}
        >
          {video.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            {formatViews(video.views)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            •
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
            }}
          >
            {formatDate(video.publishedAt)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
