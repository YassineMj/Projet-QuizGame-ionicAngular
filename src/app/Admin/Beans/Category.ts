import { Question } from "./Question";

// category.model.ts
export class Category {
    $key:string;
    nomCategorie: string;
    descriptionCategorie: string;
    questions: Question[];
  }
  