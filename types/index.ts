export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  image: string;
  readingTime: string;
  relatedServiceSlugs: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
}
