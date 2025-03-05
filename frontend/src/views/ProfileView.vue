<template>

        <div class="min-h-screen ">
                <Header />

                <div class="flex-grow">
                        <ProfileSidebar />
                        <div class="w-full md:w-3/4">
                                <PersonalInfo />
                                <OrderHistory />
                        </div>
                        
                </div>
                <Footer />

        </div>
</template>


<script setup lang="ts">

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import ProfileSidebar from '@/components/ProfileSidebar.vue'
import PersonalInfo from '@/components/PersonalInfo.vue'
import OrderHistory from '@/components/OrderHistory.vue'

import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>