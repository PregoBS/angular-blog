import type { BlogPost } from "src/types-api";

export const _pokedexPost: BlogPost = {
    "uid": "2",
    "autor": "Rodrigo C.",
    "title": "Pokedex Javascript",
    "content": [
        {
            "type": "p",
            "value": "loremIpsumParagraph"
        },
        {
            "type": "p",
            "value": "loremIpsumParagraph"
        },
        {
            "type": "p",
            "value": "loremIpsumParagraph"
        },
        {
            "type": "images",
            "props": [
                { "src": "assets/images/pokedex-preview-1.webp", "alt": "pokedex-preview-1" },
                { "src": "assets/images/pokedex-preview-2.webp", "alt": "pokedex-preview-2" }
            ],
            "source": "imagens do autor"
        },
        {
            "type": "rodafoot",
            "value": "Texto escrito com auxílio do ChatGPT"
        }
    ],
    "updatedAt": "11/09/2023",
    "image": "assets/images/pokedex-card.webp",
    "excerpt": "lorem Ipsum"
};