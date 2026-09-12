/**
 * Wikimedia Commons API integration for image search
 */
import type { SearchImagesInput } from "./schemas.js";
import type { ImageMetadata, SearchResult, WikimediaApiResponse } from "./types.js";
/**
 * Build Wikimedia Commons API URL for image search
 */
export declare function buildWikimediaApiUrl(params: SearchImagesInput): string;
/**
 * Fetch search results from Wikimedia Commons API
 */
export declare function fetchWikimediaImages(params: SearchImagesInput): Promise<WikimediaApiResponse>;
/**
 * Parse Wikimedia API response and extract image metadata
 */
export declare function parseWikimediaResponse(apiResponse: WikimediaApiResponse, params: SearchImagesInput): SearchResult;
/**
 * Generate thumbnail composite image from multiple images
 * Creates a 3-column grid with up to MAX_IMAGES_IN_COMPOSITE images
 * with index numbers overlaid on each thumbnail
 */
export declare function generateThumbnailComposite(images: ImageMetadata[]): Promise<string>;
//# sourceMappingURL=wikimedia-api.d.ts.map