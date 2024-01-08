export interface ArticlesType {
  id: number;
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  biography: Biography;
  articles: Article[];
}

export interface Article {
  title: string;
  popular: boolean;
  description: string;
  date: DateEnum;
  read: Read;
  label: Label;
  img: string;
  imgAlt: string;
  slug: string;
  content: Content[];
  popularity?: number;
}

export interface Content {
  img?: string;
  summary?: string;
  section1?: string;
  quote?: string[];
  summary2?: string;
  section2?: string;
}

export type DateEnum = "16 September 2023" | "16 March 2022";

export type Label = "Art" | "Sculptures" | "Street art";

export type Read = "10 mins";

export type Biography = {
  summary: string;
  body: string;
};
