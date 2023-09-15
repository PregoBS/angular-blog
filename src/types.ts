export interface PostCardProps {
  uid: string;
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

export interface Contact {
  icon: string;
  name: string;
  url: string;
}