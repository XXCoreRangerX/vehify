<template>
    <footer class="flex justify-center gap-2 border-t bg-background p-5 text-muted-foreground">
        <p>
            &copy; {{ new Date().getFullYear() }} <span class="font-semibold">{{ useAppConfig().title }}</span>
        </p>
    </footer>
</template>
