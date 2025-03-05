<template>

    <div class="min-h-screen flex flex-col">
        <Header />

        <div class="flex-grow">
            <Hero />

            <HowItWorks />
            <FeaturedCars />
            <Benefits />
        </div>
        <Footer />

    </div>
</template>


<script setup lang="ts">
import HowItWorks from '@/components/HowItWorks.vue'
import FeaturedCars from '@/components/FeaturedCars.vue'
import Benefits from '@/components/Benefits.vue'
import Hero from '@/components/Hero.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>