<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{


    // Project data - in a real app, this would come from a database
    private function getProjects()
    {
        return [
            [
                'id' => 1,
                'slug' => 'blog-platform',
                'title' => 'Blog Platform',
                'description' => 'A full-featured blog platform with user authentication, markdown support, and comment system.',
                'full_description' => 'This blog platform was built to provide content creators with a powerful yet easy-to-use publishing tool. The platform includes features such as user authentication, role-based permissions, markdown editing with live preview, image uploads, comment system with moderation, and analytics dashboard.',
                'technologies' => ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'AWS S3'],
                'image' => '/images/placeholder-project1.jpg',
                'gallery' => [
                    '/images/placeholder-project1.jpg',
                    '/images/placeholder-project2.jpg',
                    '/images/placeholder-project3.jpg',
                ],
                'liveLink' => 'https://example.com/blog-project',
                'githubLink' => 'https://github.com/username/blog-project',
                'challenge' => 'Implementing real-time comment updates was challenging. I solved it using Socket.io for instant notifications and updates without page refresh.',
                'solution' => 'I implemented a WebSocket-based solution using Socket.io that maintains an open connection between the client and server. When a new comment is posted, the server broadcasts the comment to all connected clients, which then update their UI accordingly without requiring a page refresh.',
                'features' => [
                    'User authentication and authorization',
                    'Markdown editor with live preview',
                    'Image uploads and management',
                    'Comment system with real-time updates',
                    'Responsive design for all devices',
                    'SEO optimization',
                ],
                'testimonial' => [
                    'text' => 'The blog platform John built for us has significantly improved our content publishing workflow. The real-time features are particularly impressive.',
                    'author' => 'Jane Smith, Content Manager',
                    'company' => 'Digital Media Inc.'
                ],
                'date_completed' => 'August 2022',
                'category' => 'Web Application'
            ],
            [
                'id' => 2,
                'slug' => 'api-management-system',
                'title' => 'API Management System',
                'description' => 'A system for managing and monitoring API endpoints, with analytics and documentation features.',
                'full_description' => 'This API Management System provides developers with a comprehensive solution for managing, monitoring, and documenting their APIs. The system includes features for rate limiting, authentication, analytics tracking, automatic documentation generation, and testing tools. It was designed to handle high-traffic APIs with minimal performance impact.',
                'technologies' => ['Laravel', 'MySQL', 'Vue.js', 'Docker', 'Redis', 'Swagger'],
                'image' => '/images/placeholder-project2.jpg',
                'gallery' => [
                    '/images/placeholder-project2.jpg',
                    '/images/placeholder-project3.jpg',
                    '/images/placeholder-project1.jpg',
                ],
                'liveLink' => 'https://example.com/api-system',
                'githubLink' => 'https://github.com/username/api-system',
                'challenge' => 'Handling rate limiting and caching for high-traffic APIs was complex. I implemented a Redis-based solution with fallback mechanisms for reliability.',
                'solution' => 'I designed a distributed rate limiting system using Redis as the primary storage for rate limit counters. The system includes a fallback mechanism that uses local caching when Redis is unavailable, ensuring that API protection remains active even during database outages. The solution can handle thousands of requests per second with minimal latency impact.',
                'features' => [
                    'API key management and authentication',
                    'Rate limiting with configurable thresholds',
                    'Real-time analytics dashboard',
                    'Automatic documentation generation',
                    'Testing tools and request validation',
                    'Webhook integration for events',
                ],
                'testimonial' => [
                    'text' => 'The API management system has transformed how we handle our external APIs. The analytics and rate limiting features have been invaluable for our team.',
                    'author' => 'Michael Johnson, CTO',
                    'company' => 'TechSolutions Ltd.'
                ],
                'date_completed' => 'March 2023',
                'category' => 'Developer Tools'
            ],
            [
                'id' => 3,
                'slug' => 'audio-analysis-tool',
                'title' => 'Audio Analysis Tool',
                'description' => 'A tool for analyzing audio files, visualizing frequencies, and extracting metadata.',
                'full_description' => 'This Audio Analysis Tool provides musicians, sound engineers, and researchers with powerful capabilities for analyzing audio files. The tool can process various audio formats, visualize frequency spectrums, extract metadata, identify patterns, and generate detailed reports. It uses machine learning algorithms to identify instruments and musical features in audio recordings.',
                'technologies' => ['Python', 'TensorFlow', 'Flask', 'Web Audio API', 'React', 'FFmpeg'],
                'image' => '/images/placeholder-project3.jpg',
                'gallery' => [
                    '/images/placeholder-project3.jpg',
                    '/images/placeholder-project1.jpg',
                    '/images/placeholder-project2.jpg',
                ],
                'liveLink' => 'https://example.com/audio-tool',
                'githubLink' => 'https://github.com/username/audio-tool',
                'challenge' => 'Processing large audio files efficiently was difficult. I implemented a chunking algorithm that processes segments in parallel while maintaining context.',
                'solution' => 'I developed a custom chunking algorithm that divides large audio files into overlapping segments that can be processed in parallel. The algorithm maintains context across chunk boundaries to ensure accurate analysis of features that span multiple chunks. This approach reduced processing time by up to 80% for large files while maintaining analysis accuracy.',
                'features' => [
                    'Support for multiple audio formats (WAV, MP3, FLAC, etc.)',
                    'Real-time frequency spectrum visualization',
                    'Instrument and pattern recognition',
                    'Metadata extraction and editing',
                    'Batch processing capabilities',
                    'Detailed analysis reports',
                ],
                'testimonial' => [
                    'text' => 'As a music producer, this audio analysis tool has become an essential part of my workflow. The frequency visualization and instrument recognition features are incredibly accurate.',
                    'author' => 'Alex Rodriguez, Music Producer',
                    'company' => 'Harmony Studios'
                ],
                'date_completed' => 'November 2022',
                'category' => 'Audio Software'
            ],
            [
                'id' => 4,
                'slug' => 'e-commerce-platform',
                'title' => 'E-Commerce Platform',
                'description' => 'A complete e-commerce solution with product management, cart functionality, and payment processing.',
                'full_description' => 'This E-Commerce Platform provides businesses with a comprehensive solution for selling products online. The platform includes features for product management, inventory tracking, shopping cart functionality, secure payment processing, order management, and customer accounts. It was designed to be highly customizable and scalable to accommodate businesses of all sizes.',
                'technologies' => ['Laravel', 'MySQL', 'React', 'Redux', 'Stripe API', 'AWS'],
                'image' => '/images/placeholder-project1.jpg',
                'gallery' => [
                    '/images/placeholder-project1.jpg',
                    '/images/placeholder-project2.jpg',
                    '/images/placeholder-project3.jpg',
                ],
                'liveLink' => 'https://example.com/ecommerce',
                'githubLink' => 'https://github.com/username/ecommerce',
                'challenge' => 'Implementing a secure and seamless checkout process with multiple payment options was challenging. I integrated various payment gateways while maintaining a consistent user experience.',
                'solution' => 'I designed a modular payment processing system that abstracts the differences between payment providers behind a unified API. This allows the platform to support multiple payment methods (credit cards, PayPal, Apple Pay, etc.) while maintaining a consistent checkout experience. The system includes robust error handling and security measures to protect sensitive payment information.',
                'features' => [
                    'Product catalog with categories and filters',
                    'Inventory management system',
                    'Shopping cart and wishlist functionality',
                    'Secure checkout with multiple payment options',
                    'Order tracking and history',
                    'Customer account management',
                    'Admin dashboard with sales analytics',
                ],
                'testimonial' => [
                    'text' => 'The e-commerce platform John developed for our business has significantly increased our online sales. The system is robust, user-friendly, and highly customizable.',
                    'author' => 'Sarah Thompson, CEO',
                    'company' => 'Boutique Brands'
                ],
                'date_completed' => 'June 2023',
                'category' => 'E-Commerce'
            ],
        ];
    }


    public function main()
    {
        // ilk giriş sayfası


        return Inertia::render('Main');
    }

    public function projects_index()
    {
        return Inertia::render('Projects/Index', [
            'projects' => $this->getProjects()
        ]);
    }

    public function projects_detail($slug)
    {
        $projects = $this->getProjects();
        $project = collect($projects)->firstWhere('slug', $slug);

        if (!$project) {
            abort(404);
        }

        return Inertia::render('Projects/Detail', [
            'project' => $project,
            'relatedProjects' => collect($projects)
                ->filter(function ($item) use ($project) {
                    return $item['id'] !== $project['id'];
                })
                ->take(3)
                ->values()
                ->all()
        ]);
    }
}
