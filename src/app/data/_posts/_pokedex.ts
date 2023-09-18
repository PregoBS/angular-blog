import type { BlogPost } from "src/types-api";

export const _pokedexPost: BlogPost = {
    "uid": "2",
    "autor": "Rodrigo C.",
    "title": "Desenvolvendo uma Pokédex com Vanilla JavaScript, HTML e CSS: A Jornada dos Primeiros 150 Pokémon",
    "content": [
        {
            "type": "h2",
            "value": "Introdução"
        },
        {
            "type": "p",
            "value": "Pokémon é uma franquia que cativou gerações de fãs ao redor do mundo. Desde a sua estreia nos anos 90, essas adoráveis criaturas têm acompanhado muitos de nós em aventuras épicas. E agora, graças ao mundo da programação web, podemos trazer um pedacinho desse universo para a nossa tela. Neste post, vou te guiar através da jornada de criação de uma Pokedex com os 150 primeiros Pokémon, usando apenas JavaScript, HTML e CSS. Além disso, vamos descobrir como economizar dados e acelerar o carregamento das informações com o uso inteligente do cache local."
        },
        {
            "type": "h2",
            "value": "Construindo a Pokedex"
        },
        {
            "type": "p",
            "value": "A primeira etapa do nosso projeto foi consumir uma API externa que nos fornece dados detalhados sobre os Pokémon. Para começar, exibimos os 10 primeiros Pokémon na tela inicial, mantendo tudo leve e rápido. Um botão de 'Carregar Mais' permite que o usuário explore todos os 150 Pokémon, carregando-os em lotes de 10. Essa abordagem ajuda a manter a página responsiva e evita sobrecarregar o servidor com requisições desnecessárias."
        },
        {
            "type": "h2",
            "value": "Cache Local para Economizar Dados"
        },
        {
            "type": "p",
            "value": "Uma das partes mais interessantes deste projeto foi o uso de cache local com o LocalStorage do navegador. Isso significa que, uma vez que um Pokémon tenha sido carregado, suas informações são armazenadas localmente. Isso não apenas acelera o carregamento subsequente da página, mas também reduz a quantidade de requisições à API externa, economizando dados e tornando a experiência mais fluida para o usuário."
        },
        {
            "type": "h2",
            "value": "Página de Informações Detalhadas"
        },
        {
            "type": "p",
            "value": "Ao clicar em um card de Pokémon, o usuário é redirecionado para uma página de informações detalhadas. Aqui, recebemos uma query string com o nome do Pokémon e montamos dinamicamente a página com detalhes como tipo, altura, peso e muito mais. Essa abordagem dinâmica torna a experiência de exploração dos Pokémon ainda mais envolvente."
        },
        {
            "type": "h2",
            "value": "Conclusão"
        },
        {
            "type": "p",
            "value": "Este projeto de construção de uma Pokedex com Vanilla JavaScript, HTML e CSS foi uma jornada emocionante. Além de trazer alegria aos fãs de Pokémon, também nos ensinou valiosas lições sobre otimização de desempenho, armazenamento em cache e manipulação dinâmica de conteúdo web. Espero que este post tenha inspirado você a embarcar em sua própria aventura de programação e a explorar o mundo dos seus projetos criativos."
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
    "updatedAt": "29/08/2023",
    "image": "assets/images/pokedex-card.webp",
    "excerpt": "Descubra como construí uma Pokedex incrível usando apenas JavaScript, HTML e CSS, economizando dados com cache local e explorando os segredos dos 150 primeiros Pokémon. Prepare-se para uma viagem emocionante pelo mundo dos monstrinhos de bolso!"
};