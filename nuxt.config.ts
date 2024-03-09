export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon.png",
                },
            ],
        },
    },
    devtools: { enabled: true },
    modules: [
        "@vueuse/nuxt",
        "@nuxtjs/google-fonts",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "shadcn-nuxt",
        "@nuxt/image",
        "nuxt-icon",
        "@vee-validate/nuxt",
    ],
    css: ["~/assets/css/global.css"],
    googleFonts: {
        families: {
            Inter: "200..700",
        },
    },
    colorMode: {
        classSuffix: "",
    },
});
