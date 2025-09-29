"use client"

import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag, Star } from "lucide-react"

interface BlogPostProps {
  title: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
  views: string
  likes: string
  excerpt: string
  relatedPosts?: Array<{
    title: string
    slug: string
    category: string
    readTime: string
  }>
}

export default function BlogPostTemplate({
  title,
  content,
  author,
  date,
  readTime,
  category,
  slug,
  views,
  likes,
  excerpt,
  relatedPosts,
}: BlogPostProps) {
  const defaultRelatedPosts = [
    {
      title: "Amazon PPC Mastery: 7 Advanced Strategies That Increased ROAS by 340%",
      slug: "amazon-ppc-advanced-strategies-roas",
      category: "PPC Strategy",
      readTime: "8 min read",
    },
    {
      title: "Product Listing Optimization: The Complete 2024 Guide",
      slug: "product-listing-optimization-guide-2024",
      category: "Listing Optimization",
      readTime: "10 min read",
    },
    {
      title: "Brand Building on Amazon: From Generic to Premium in 90 Days",
      slug: "brand-building-amazon-premium",
      category: "Brand Building",
      readTime: "9 min read",
    },
  ]

  const finalRelatedPosts = relatedPosts || defaultRelatedPosts

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center mb-6">
            <Tag className="h-5 w-5 mr-3 text-blue-300" />
            <span className="text-blue-300 text-sm font-bold bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">
              {category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{title}</h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">{excerpt}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">{author}</span>
                <p className="text-gray-300 text-sm">Amazon Success Expert</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>{views} views</span>
                <span>{likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-semibold">Share this article:</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{views} views</span>
                  <span>{likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Related Articles</h2>
            <p className="text-xl text-gray-600">Continue learning with these expert guides</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {finalRelatedPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6">
                  <div className="aspect-video bg-white/60 backdrop-blur-sm rounded-xl shadow-inner flex items-center justify-center text-gray-500 group-hover:text-gray-700 transition-colors">
                    <BookOpen className="h-8 w-8" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Tag className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-blue-600 text-xs font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
                  >
                    Read Article
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-200">Ready to Get Started?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Want Results Like These for Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get expert help to implement these strategies and achieve similar success
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Get Expert Help
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
