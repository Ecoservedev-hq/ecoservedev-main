import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { articles } from '@/data/articles';
import ReadingProgressBar from '../components/ReadingProgressBar';
import ShareButtons from '../components/ShareButtons';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get 2 related articles (excluding the current one)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <Header theme="solid" />
      <ReadingProgressBar />

      <article className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb / Back button */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-display font-600 text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <Icon name="ArrowLeftIcon" size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          {/* Article Header */}
          <div className="mb-10">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-display font-700 uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6 inline-block">
              {article.category}
            </span>
            
            <h1 className="font-display font-700 text-3xl md:text-5xl text-foreground leading-[1.15] mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground font-sans border-b border-border pb-8">
              <span className="flex items-center gap-2">
                <Icon name="CalendarIcon" size={14} variant="outline" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Icon name="ClockIcon" size={14} variant="outline" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-xl border border-border">
            <AppImage
              src={article.image}
              alt={article.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Reading Layout (narrower text width for optimal reading experience) */}
          <div className="max-w-3xl mx-auto">
            {/* Article Body Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none font-sans text-foreground/90 text-base md:text-lg leading-relaxed space-y-6">
              {article.content.map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display font-700 text-xl md:text-2xl text-foreground pt-8 pb-2 border-l-2 border-primary pl-4 my-8">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (index === 0) {
                  return (
                    <p key={index} className="mb-6 text-lg md:text-xl font-medium text-foreground/90 leading-relaxed italic border-l-4 border-accent pl-4 py-1 bg-muted/30 rounded-r-xl pr-2">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={index} className="mb-6 whitespace-pre-line text-foreground/80">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Sharing buttons */}
            <ShareButtons title={article.title} />

            {/* Article Tags */}
            <div className="mt-8 pb-12 border-b border-border">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground text-xs font-display font-600 px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="mt-16">
              <h4 className="font-display font-700 text-xl text-foreground mb-8">
                Recommended Reading
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    href={`/insights/${related.slug}`}
                    key={related.id}
                    className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <AppImage
                        src={related.image}
                        alt={related.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="bg-muted text-muted-foreground text-[10px] font-display font-700 uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-3">
                          {related.category}
                        </span>
                        <h5 className="font-display font-700 text-sm text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h5>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-sans mt-4 pt-4 border-t border-border/50">
                        <span>{related.date}</span>
                        <span className="flex items-center gap-1 text-accent font-display font-600">
                          Read
                          <Icon name="ArrowRightIcon" size={12} variant="outline" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
