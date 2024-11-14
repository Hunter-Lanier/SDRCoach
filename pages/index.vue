<template>
    <div>
        <header>
            <nav class="bg-white shadow-md">
                <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="https://x.com/sdSaaSlinger"
                        class="flex items-center gap-2 text-xl font-bold text-gray-800">
                        <img src="../assets/images/slinger.jpg" alt="Code Slinger"
                            class="w-8 h-8 rounded-full transition-opacity duration-300"
                            :class="{ 'opacity-0': !isImageLoaded, 'opacity-100': isImageLoaded }"
                            @load="isImageLoaded = true" @error="handleImageError">
                        <span>@sdSaaSlinger</span>
                    </a>
                    <div class="hidden md:flex items-center gap-6">
                        <a @click="scrollToSection('features')"
                            class="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                        <a @click="scrollToSection('pricing')"
                            class="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                        <a @click="scrollToSection('contact')"
                            class="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                        <a href="https://calendly.com/sdSaaSlinger"
                            class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Book
                            a Call</a>
                    </div>
                    <div class="md:hidden">
                        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div v-if="isMobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
                <div class="flex flex-col p-4 space-y-4">
                    <a @click="scrollToSection('features'); isMobileMenuOpen = false"
                        class="cursor-pointer text-gray-600 hover:text-blue-600">Features</a>
                    <a @click="scrollToSection('pricing'); isMobileMenuOpen = false"
                        class="cursor-pointer text-gray-600 hover:text-blue-600">Pricing</a>
                    <a @click="scrollToSection('contact'); isMobileMenuOpen = false"
                        class="cursor-pointer text-gray-600 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </header>

        <section id="hero" class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Land Your Dream Tech Sales Role</h1>
                <p class="text-xl mb-8">Learn from a Top 1% SDR &amp; Former Tech Sales Recruiter</p>
                <a href="https://calendly.com/sdSaaSlinger"
                    class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Schedule
                    Your Strategy Call</a>
            </div>
        </section>

        <section id="bio" class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-6">Meet <a href="https://x.com/sdSaaSlinger"
                            class="text-blue-600">@sdSaaSlinger</a></h2>
                    <p class="text-gray-700 mb-4">Hey there! I'm a top-performing SDR and former tech sales recruiter
                        passionate about helping others break into the exciting world of tech sales.</p>
                    <p class="text-gray-700 mb-8">With experience on both sides of the hiring table, I've developed a
                        comprehensive understanding of what it takes to not just land an SDR role, but to excel in it.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div
                            class="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            <div class="text-3xl font-bold text-blue-600 mb-2">150%+</div>
                            <div class="text-gray-600">Quota Attainment</div>
                        </div>
                        <div
                            class="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            <div class="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                            <div class="text-gray-600">Candidates Screened</div>
                        </div>
                        <div
                            class="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            <div class="text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div class="text-gray-600">Successful Placements</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" class="py-16">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Why Work With Me</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        class="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div class="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 class="text-xl font-semibold">Top 1% Performance</h3>
                        </div>
                        <p class="text-gray-600">Get mentored by someone who's consistently exceeded targets and knows
                            what it takes to succeed in tech sales.</p>
                    </div>
                    <div
                        class="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div class="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <h3 class="text-xl font-semibold">Insider Knowledge</h3>
                        </div>
                        <p class="text-gray-600">Leverage my experience as a tech sales recruiter to understand exactly
                            what companies are looking for.</p>
                    </div>
                    <div
                        class="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div class="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 mr-3" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <h3 class="text-xl font-semibold">Proven Strategies</h3>
                        </div>
                        <p class="text-gray-600">Access actionable, proven techniques to help you stand out, ace
                            interviews, and crush quotas.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Services &amp; Pricing</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Add the three pricing tiers -->
                </div>
            </div>
        </section>

        <section id="contact" class="py-16 bg-blue-600 text-white">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-4">Ready to Start Your Tech Sales Career?</h2>
                <p class="text-xl mb-8">Book your strategy call today and let's create your success plan</p>
                <a href="https://calendly.com/sdSaaSlinger"
                    class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Book
                    Your Call Now</a>
            </div>
        </section>

        <section id="quick-contact" class="py-16 bg-gray-50">
            <div class="max-w-xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-8">Quick Question?</h2>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <input v-model="form.email" type="email" placeholder="Your Email"
                            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required>
                    </div>
                    <div>
                        <textarea v-model="form.message" placeholder="Your Question"
                            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows="4" required></textarea>
                    </div>
                    <button type="submit"
                        class="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        :disabled="isSubmitting">
                        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                    </button>
                </form>
                <div v-if="formStatus === 'success'" class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                    Message sent successfully! We'll get back to you soon.
                </div>
                <div v-if="formStatus === 'error'" class="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    There was an error sending your message. Please try again later.
                </div>
            </div>
        </section>

        <footer class="bg-gray-800 text-white py-8">
            <div class="max-w-6xl mx-auto px-4 text-center">
                © 2024 <a href="https://x.com/sdSaaSlinger" class="text-blue-400 hover:text-blue-300">@sdSaaSlinger</a>.
                All
                rights reserved.
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useHead } from 'nuxt/app'

const isImageLoaded = ref(false)
const isMobileMenuOpen = ref(false)

const form = reactive({
    email: '',
    message: ''
})
const isSubmitting = ref(false)
const formStatus = ref(null)

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
}

const handleSubmit = async () => {
    isSubmitting.value = true
    formStatus.value = null

    try {
        const response = await fetch('https://api.example.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

        if (!response.ok) throw new Error('Submission failed')

        formStatus.value = 'success'
        form.email = ''
        form.message = ''
    } catch (error) {
        console.error('Form submission error:', error)
        formStatus.value = 'error'
    } finally {
        isSubmitting.value = false
    }
}

const handleImageError = () => {
    console.error('Failed to load profile image')
    isImageLoaded.value = false
}

// Page-specific meta tags
useHead({
    title: 'SDR Job Coach - Land Your Dream Tech Sales Role',
    meta: [
        {
            name: 'description',
            content: 'Learn from a Top 1% SDR & Former Tech Sales Recruiter. Get personalized coaching to excel in tech sales.'
        }
    ]
})
</script>