export interface NewsItemBrief {
    _id: string;
    title: string;
    publish_date: string;
}

export type NewsList = {
    rows: NewsItemBrief[];
    total: number;
}

export type NewsItemDetailed = {
    _id: string;
    title: string;
    publish_date: string;
    content: string;
    image: string[];
}