import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface BookItemCardProps {
  book: {
    id: string;
    title: string;
    imageUrl: string;
    link: string;
  };
}

export default function BookItemCard({ book }: BookItemCardProps) {
  return (
    <Link href={book.link} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card
        sx={{
          height: 215,
          maxWidth: 204,
          minWidth: 204,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          borderRadius: 0,
          border: '1px solid #eee',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        }}
      >
        <CardMedia
          component="img"
          image={book.imageUrl}
          alt={book.title}
          sx={{
            maxHeight: 135,
            minHeight: 135,
            width: 202,
            objectFit: 'cover',
            objectPosition: 'center',
            backgroundColor: '#f5f5f5',
          }}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            sx={{
              fontWeight: 'bold',
              lineHeight: 1.4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {book.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}