export class Pokemon {
    constructor(
        public id: number,
        public name: string = 'Saisir un nom',
        public hp: number = 10,
        public cp: number = 5,
        public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
        public types: Array<string> = ['Normal'],
        public created: Date = new Date()
    ) {
        // this.id = id;
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
};