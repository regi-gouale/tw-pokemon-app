export class Pokemon {
    constructor(
        public id: number,
        public generation: number = 1,
        public category: string = "Pok\u00e9mon Bug",
        public name: PokemonName = {
            "fr": "MissingNo.",
            "en": "MissingNo.",
            "jp": "\u30ad\u30e3\u30bf\u30d4\u30fc"
        },
        public sprites: PokemonSprites = {
            "regular": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/0/regular.png",
            "shiny": null
        },
        public types: Array<PokemonType> | null = null,
        public talents: Array<PokemonTalent> | null = null,
        public stats: PokemonStats | null = null,
        public resistances: Array<PokemonResistance> | null = null,
        public evolution: PokemonEvolution | null = null,
        public height: string = "0.0 m",
        public weight: string = "0.0 kg",
        public eggGroups: Array<string> | null = null,
        public sex: {} | null = null,
        public catchRate: number = 0,
        public levelingRate: number = 0,
        public forme: string | null= "Normal",
        // public hp: number = 10,
        // public cp: number = 5,
        // public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
        
        public created: Date = new Date()
    ) {
        // this.id = id;
        this.generation = generation;
        this.category = category;
        this.name = name;
        this.sprites = sprites;
        this.types = types;
        this.talents = talents;
        this.created = created;
    }
};

export interface PokemonName {
    fr: string;
    en: string;
    jp: string;
}

export interface PokemonSprites {
    regular: string;
    shiny: string | null;
}

export interface PokemonType {
    name: string;
    image: string;
}

export interface PokemonTalent {
    name: string;
    tc: boolean;
}

export interface PokemonStats {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
}

export interface PokemonResistance {
    name: string;
    multiplier: number;
}

export interface PokemonEvolution {
    pre: Array<PokemonTree> | null;
    next: Array<PokemonTree> | null;
    mega: PokemonMega | null;
}

export interface PokemonTree {
    id: number;
    name: string;
    condition: string;
}

export interface PokemonMega {
    orbe: string;
    sprites: PokemonSprites;
}