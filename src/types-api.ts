export type BlogPostContent = {
    type: "p" | "span" | "h1" | "h2" | "rodafoot";
    value: string;
    source?: null,
    props?: null,
    href?: null,
} | {
    type: "images",
    props: { alt: string, src: string }[],
    source: string;
    href?: null,
    value?: null,
} | {
    type: "link",
    value: string,
    href: string,
    props?: null,
    source?: null,
};

export interface BlogPost {
    uid: string;
    title: string;
    content: BlogPostContent[];
    autor: string;
    updatedAt: string;
    image: string | null;
    excerpt: string;
}

export interface ResumeHeaderItem {
    type: "text" | "link",
    label: string;
    link?: string;
}

export interface ResumeHeader {
    name: string;
    items: ResumeHeaderItem[],
}

export interface ResumeEntryRow {
    left: string;
    right: string;
    mergeColumns: boolean;
    firstRow: boolean;
}

export interface ResumeSectionEntry {
    type: "two-rows" | "more-rows";
    rows: ResumeEntryRow[];
}

export interface ResumeSection {
    name: string;
    entries: ResumeSectionEntry[];
}