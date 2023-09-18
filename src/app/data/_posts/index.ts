import type { BlogPost } from "src/types-api";
import { _nefroatualPost } from "./_nefroatual";
import { _pokedexPost } from "./_pokedex";
import { _mt5TradeBotPost } from "./_mt5TradeBot";

const posts: BlogPost[] =  [
    _nefroatualPost,
    _pokedexPost,
    _mt5TradeBotPost
];

export default posts;