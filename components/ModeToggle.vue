<script setup lang="ts">
const setColorMode = (newTheme: string) => {
    useColorMode().preference = newTheme;
};
</script>

<template>
    <div
        class="fixed bottom-3 right-3 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-blue-400 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    >
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline" size="icon2">
                    <Icon
                        name="codicon:color-mode"
                        class="h-7 w-7 rotate-0 transition-transform duration-500 dark:rotate-180"
                    />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="setColorMode('system')">
                    <Icon name="lucide:monitor" class="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>
                <DropdownMenuItem @click="setColorMode('light')">
                    <Icon name="lucide:sun" class="mr-2 h-4 w-4" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem @click="setColorMode('dark')">
                    <Icon name="lucide:moon" class="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>
