#!/usr/bin/env node
/**
 * (Unofficial) Wikimedia Image Search MCP Server
 *
 * This MCP (Model Context Protocol) server enables AI assistants to search for images on Wikimedia
 * Commons. It provides detailed metadata and optional thumbnail composites to help AI models visually
 * compare results.
 */
import type { SearchResult } from "./types.js";
/**
 * Format search results into a llm-friendly text response
 */
export declare function formatSearchResults(result: SearchResult): string;
//# sourceMappingURL=index.d.ts.map