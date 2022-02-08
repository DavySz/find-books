export type volumeInfoType = {
    authors?: Array<string>;
    categoires?: Array<string>;
    description?: string;
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    language?: string;
    pageCount?: number;
    publishedDate?: string;
    publisher?: string;
    subtitle?: string;
    title?: string;
}

export type bookType = {
    id: string;
    volumeInfo: volumeInfoType
}