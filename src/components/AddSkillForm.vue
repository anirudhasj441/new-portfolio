<template>
    <q-card style="width: 500px; max-width: 100%;">
        <q-card-section class="row items-center">
            <div class="text-h6">Add Skill</div>
            <q-space></q-space>
            <q-btn flat icon="close" @click="$emit('closeDialog')"></q-btn>
        </q-card-section>
        <q-card-section class="q-gutter-md">
            <q-input label="skill" outlined></q-input>
            <q-input label="category" outlined></q-input>
            <div class="text-right">
            </div>
        </q-card-section>
        <q-card-section>
            <div class="text-h6">Icon</div>
            <q-uploader color="grey-8" class="full-width"></q-uploader>
        </q-card-section>
        <q-card-section class="q-pb-md q-pt-sm">
            <q-btn icon="add" color="grey-9" class="full-width" />
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    data() {
        return {
            skill: '',
            category: '',
            icon: ''
        }
    },
    methods: {
        submit() { }
    }
}
</script>
