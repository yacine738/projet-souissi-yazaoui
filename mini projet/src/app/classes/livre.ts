import { Category } from "../enum/category";
export class Livre {
    constructor(
        public id: number,
        public titre: string,
        public auteur: string,
        public categorie:Category,
        public prix:number
){}
}
