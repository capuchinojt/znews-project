import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { VideoItem } from '@/lib/types/video';

interface VideoCardProps {
  video: VideoItem;
  isActive?: boolean;
  onClick?: () => void;
}

export default function VideoCard({ video, isActive = false, onClick }: VideoCardProps) {
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
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 ngày trước';
    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} tuần trước`;
    return `${Math.ceil(diffDays / 30)} tháng trước`;
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        m: 1,
        cursor: 'pointer',
        border: isActive ? '2px solid #1976d2' : '1px solid transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      }}
    >
      {/* Thumbnail */}
      <Box
        sx={{
          position: 'relative',
          width: 120,
          height: 100,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${video.thumbnailUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px 0 0 4px',
          }}
        />
        
        {/* Play Button - Bottom Left */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 4,
            left: 4,
            width: 24,
            height: 24,
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <PlayArrowIcon sx={{ fontSize: 14 }} />
        </Box>

        {/* Duration */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 4,
            right: 4,
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            px: 0.5,
            py: 0.25,
            borderRadius: 1,
            fontSize: '0.7rem',
            fontWeight: 'bold',
          }}
        >
          {video.duration}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 1, flex: 1, minWidth: 0 }}>
        <Typography
          variant="body2"
          component="h3"
          sx={{
            fontWeight: 'bold',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: '0.875rem',
          }}
        >
          {video.title}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            display: 'block',
          }}
        >
          {video.category}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.75rem',
          }}
        >
          {formatViews(video.views)} • {formatDate(video.publishedAt)}
        </Typography>
      </Box>
    </Card>
  );
}
