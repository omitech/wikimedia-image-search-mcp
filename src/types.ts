export interface WikimediaApiResponse {
  query?: {
    pages?: Array<{
      pageid?: number;
      index?: number;
      title?: string;
      imageinfo?: Array<{
        thumburl?: string;
        size?: number;
        width?: number;
        height?: number;
        url?: string;
        descriptionurl?: string;
        descriptionshorturl?: string;
        mime?: string;
        extmetadata?: {
          ObjectName?: { value: string };
          Categories?: { value: string };
          DateTimeOriginal?: { value: string };
          ImageDescription?: { value: string };
          Credit?: { value: string };
          Artist?: { value: string };
          LicenseShortName?: { value: string };
          License?: { value: string };
          UsageTerms?: { value: string };
          LicenseUrl?: { value: string };
        };
      }>;
    }>;
  };
  error?: {
    code: string;
    info: string;
  };
}

export interface ImageMetadata {
  index: number;
  /** Reduced image returned by Commons for previews and visual comparison. */
  thumbnailUrl: string;
  /** Original file URL supplied by Commons. */
  originalUrl: string;
  size?: number;
  width: number;
  height: number;
  aspectRatio?: string;
  caption?: string;
  date?: string;
  descriptionurl: string;
  description?: string;
  credit?: string;
  artist?: string;
  license?: {
    name?: string;
    usageTerms?: string;
    url?: string;
  };
}

export interface SearchResult {
  images: ImageMetadata[];
  hasMore: boolean;
  nextOffset?: number;
}

export type LicenseType = "cc0" | "all";
