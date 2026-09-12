import { z } from "zod";
export declare const SearchImagesInputSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
    offset: z.ZodDefault<z.ZodNumber>;
    license: z.ZodDefault<z.ZodEnum<["cc0", "all"]>>;
    include_thumbnails: z.ZodDefault<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    query: string;
    limit: number;
    offset: number;
    license: "cc0" | "all";
    include_thumbnails: boolean;
}, {
    query: string;
    limit?: number | undefined;
    offset?: number | undefined;
    license?: "cc0" | "all" | undefined;
    include_thumbnails?: boolean | undefined;
}>;
export type SearchImagesInput = z.infer<typeof SearchImagesInputSchema>;
//# sourceMappingURL=schemas.d.ts.map