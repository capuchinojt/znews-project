export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
  publishedAt: string;
  views?: number;
  description?: string;
}

export interface VideoSectionProps {
  videos: VideoItem[];
  title?: string;
}
