<script setup lang="ts">
definePageMeta({
    layout: "other",
});

// TODO: make this dynamic
useSeoMeta({
    title: useAppConfig().title + " - Car",
    ogTitle: useAppConfig().title + " - Car",
    description: "Details about ",
    ogDescription: "Details about ",
    //ogImage: useAppConfig().image,
    ogUrl: useAppConfig().url + "/car",
    twitterCard: "summary",
    twitterTitle: useAppConfig().title + " - Car",
    twitterDescription: "Details about - ",
    //twitterImage: useAppConfig().image,
});
</script>

<template>
    <Car />
</template>
