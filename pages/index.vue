<script setup lang="ts">
useSeoMeta({
    title: useAppConfig().title,
    ogTitle: useAppConfig().title,
    description: useAppConfig().description,
    ogDescription: useAppConfig().description,
    //ogImage: useAppConfig().image,
    ogUrl: "https://vehify.com",
    twitterCard: "summary",
    twitterTitle: useAppConfig().title,
    twitterDescription: useAppConfig().description,
    //twitterImage: useAppConfig().image,
});
</script>

<template>
    <Hero />
</template>
