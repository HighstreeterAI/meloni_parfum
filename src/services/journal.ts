import { articles } from "@/data/journal";
import type { Article } from "@/types/journal";

export async function getArticles(limit?: number): Promise<Article[]> {
  return typeof limit === "number" ? articles.slice(0, limit) : articles;
}

export async function getArticle(slug: string): Promise<Article | null> {
  return articles.find((article) => article.slug === slug) ?? null;
}
