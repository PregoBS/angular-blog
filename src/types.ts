export interface PostCardProps {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  endpoint?: string;
}

export interface Link {
  endpoint: string;
  label: string;
}

export interface SocialMediaLink {
  icon: string;
  name: string;
  url: string;
}