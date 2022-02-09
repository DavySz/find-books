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
    industryIdentifiers?: Array<industryIdentifiersType>
    id: string;
    canonicalVolumeLink?: string;
    previewLink?: string;
}

type industryIdentifiersType = {
    type: string;
    identifier: string;
}

export type bookType = {
    id: string;
    volumeInfo: volumeInfoType
}