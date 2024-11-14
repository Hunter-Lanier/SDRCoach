// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'SDR Job Coach - Land Your Dream Tech Sales Role | @sdSaaSlinger',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Learn from a Top 1% SDR & Former Tech Sales Recruiter. Get personalized coaching, proven strategies, and insider knowledge to break into tech sales.' },
        { name: 'keywords', content: 'SDR coaching, tech sales career, sales development representative, SDR training' },
        // Open Graph
        { property: 'og:title', content: 'SDR Job Coach - Land Your Dream Tech Sales Role' },
        { property: 'og:description', content: 'Learn from a Top 1% SDR & Former Tech Sales Recruiter.' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@sdSaaSlinger' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SDR Job Coach",
            "description": "Professional SDR coaching and mentoring services to help you break into tech sales",
            "priceRange": "$29-$99",
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter Kit",
                "price": "29",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Strategy Session",
                "price": "50",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Accelerator Package",
                "price": "99",
                "priceCurrency": "USD"
              }
            ]
          })
        }
      ]
    }
  },
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  pages: true,
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg']
  }
})
