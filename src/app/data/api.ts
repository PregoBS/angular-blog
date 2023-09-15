import type { BlogPost } from "src/types-api";

type FakeData = {
    posts: BlogPost[];
};

const loremIpsumParagraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const fakeData: FakeData = {
    posts: [
        {
            uid: "1",
            autor: "Rodrigo C.",
            title: "iPhone 15 estreia com corpo em titânio, USB-C e nova lente zoom",
            content: [
                {
                    type: "p",
                    props: null,
                    value: "A Apple apresentou a família iPhone 15, smartphones premium que trazem novidades importantes da conectividade à construção."
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
            ],
            updatedAt: "12/09/2023",
            excerpt: "A Apple apresentou a família iPhone 15, smartphones premium que trazem novidades importantes da conectividade à construção.",
            image: "assets/images/large-post-image.webp",
        },
        {
            uid: "2",
            autor: "Rodrigo C.",
            title: "Review GoPro Hero 12 Black | Câmera de ação que preza pela estabilidade",
            content: [
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
            ],
            updatedAt: "11/09/2023",
            image: "assets/images/small-post-image-1.webp",
            excerpt: null,
        },
        {
            uid: "3",
            autor: "Rodrigo C.",
            title: "Review Xiaomi Pad 6 | Um tablet potente e com tela grande",
            content: [
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
            ],
            updatedAt: "11/09/2023",
            image: "assets/images/small-post-image-2.webp",
            excerpt: null,
        },
        {
            uid: "4",
            autor: "Rodrigo C.",
            title: "Galaxy Watch 6 Classic x Watch 4 Classic | O que mudou?",
            content: [
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
                {
                    type: "p",
                    props: null,
                    value: loremIpsumParagraph
                },
            ],
            updatedAt: "10/09/2023",
            image: "assets/images/small-post-image-3.webp",
            excerpt: null,
        },
    ],
};




export class BlogApi {
    constructor () {}

    static getBlogPosts() {
        return fakeData.posts;
    }
}