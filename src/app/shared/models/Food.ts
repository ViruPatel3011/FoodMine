export class Food {
    id!: number;  // ! is used as required and ? is used for optional
    name!: string;
    price!: number;
    tags?: string[];
    favourite: boolean = false;
    stars: number = 0;
    imageUrl!: string;
    origins!: string[];
    cookTime!: string;
}