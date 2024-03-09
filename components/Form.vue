<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const formSchema = toTypedSchema(
    z.object({
        registrationNumber: z.string().min(3).max(9),
        vin: z.string().min(3),
        registrationDate: z.string().min(4),
    }),
);

const form = useForm({
    validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values: any) => {
    // Pass values to the API
    console.log(values);
});
</script>

<template>
    <form @submit="onSubmit" class="max-w-xs space-y-2">
        <FormField v-slot="{ componentField }" name="registrationNumber">
            <FormItem>
                <FormControl>
                    <Input type="text" placeholder="Registration number" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="vin">
            <FormItem>
                <FormControl>
                    <Input type="text" placeholder="VIN" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="registrationDate">
            <FormItem>
                <FormControl>
                    <Input type="text" placeholder="Registration year" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <div class="pt-1">
            <Button type="submit" class="inline-flex gap-1">
                Check vehicle
                <Icon name="ic:round-keyboard-return" exact class="h-5 w-5" />
            </Button>
        </div>
    </form>
</template>
