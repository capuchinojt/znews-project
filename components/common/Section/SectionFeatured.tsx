import { Article } from "@/lib/types";
import HashtagList from "@/components/common/Hashtags/HashtagList";
import HotNewsLayout from "@/components/news/HotNews/HotNewsLayout";

interface SectionFeaturedProps {
  articles: Article[];
  listArticles: Article[];
  sidebarArticles: Article[];
  hashtags: string[];
}

export default function SectionFeatured({
  articles,
  hashtags,
}: SectionFeaturedProps) {
  return (
    <>
      <HashtagList hashtags={hashtags} />

      <HotNewsLayout articles={articles} />
    </>
  );
}
