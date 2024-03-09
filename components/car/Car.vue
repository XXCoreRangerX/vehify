<script setup lang="ts">
const generateDates = (year: number) => {
    const dates = [];
    const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();
    const zeroPad = (number: number) => ("0" + number).slice(-2);
    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= daysInMonth(month, year); day++) {
            dates.push(`${zeroPad(day)}.${zeroPad(month)}.${year}`);
        }
    }
    return dates;
};

// TODO: Add an actual API call
// TODO: Make this an actual Car information component to be displayed at /car/id later (currently /car)
</script>

<template>
    <section class="flex flex-col justify-center gap-2">
        <h1 class="text-4xl font-semibold">Car information</h1>
        <p>Here you can find information about the car</p>

        <div class="flex w-full flex-col rounded-md border bg-card">
            <div class="border-b p-3">
                <h1 class="text-xl font-semibold">Car information</h1>
            </div>
            <div class="p-3">
                <p>Car information will be displayed here</p>
            </div>
        </div>
    </section>
</template>
