export interface BlogPostContent {
    type: "p" | "span" | "h1" | "h2" | "img";
    props: { [key: string]: string } | null;
    value: string | null;
}

export interface BlogPost {
    uid: string;
    title: string;
    content: BlogPostContent[];
    autor: string;
    updatedAt: string;
    excerpt: string | null;
    image: string | null;
}