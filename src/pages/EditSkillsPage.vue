<template>
    <q-page :style-fn="styleFunction.setStyle">
        <q-scroll-area class="fit">
            <q-card flat class="q-mb-lg q-mx-auto" style="width: 800px; max-width: 100%; background-color: transparent;">
                <q-card-section>
                    <div class="text-h6 text-center">Skills</div>
                </q-card-section>
                <q-card-section>
                    <div class="row q-col-gutter-lg">
                        <div class="col-12 col-md-4">
                            <q-card square class="full-width" style="background-color: transparent;">
                                <q-img src="/projects.png" style="height: 8rem;" ratio="1"></q-img>
                                <q-card-section class="bg-white">
                                    <div class="text-h6 text-bold text-primary">Skill 1</div>
                                </q-card-section>
                                <q-card-section class="bg-white q-py-none">
                                    <div class="text-h6 text-dark">Backend</div>
                                </q-card-section>
                                <q-card-actions align="right" class="bg-white">
                                    <q-btn dense unelevated icon="edit" color="primary"></q-btn>
                                    <q-btn dense unelevated icon="delete" color="red"></q-btn>
                                </q-card-actions>
                            </q-card>
                        </div>
                        <div class="col-12 col-md-4">
                            <q-card square class="full-width" style="background-color: transparent;">
                                <q-img src="/projects.png" style="height: 8rem;" ratio="1"></q-img>
                                <q-card-section class="bg-white">
                                    <div class="text-h6 text-bold text-primary">Skill 1</div>
                                </q-card-section>
                                <q-card-section class="bg-white q-py-none">
                                    <div class="text-h6 text-dark">Backend</div>
                                </q-card-section>
                                <q-card-actions align="right" class="bg-white">
                                    <q-btn dense unelevated icon="edit" color="primary"></q-btn>
                                    <q-btn dense unelevated icon="delete" color="red"></q-btn>
                                </q-card-actions>
                            </q-card>
                        </div>
                        <div class="col-12 col-md-4">
                            <q-btn id="add-skill" flat color="primary" size="100%" class="fit"
                                @click="addSkillDialog = true">
                                <q-icon name="sym_o_add_box" color="white" size="100px"></q-icon>
                            </q-btn>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-scroll-area>
        <q-dialog v-model="addSkillDialog">
            <add-skill-form @closeDialog="addSkillDialog = false"></add-skill-form>
        </q-dialog>
    </q-page>
</template>

<script>
import { styleFunction, backendStore } from '../stores/global-store';
import AddSkillForm from 'src/components/AddSkillForm.vue';

const backend = backendStore();

export default {
    components: {
        AddSkillForm
    },
    data() {
        return {
            addSkillDialog: false,
            styleFunction: styleFunction(),
            backend
        }
    },
    methods: {
        async fetchSkills() {
            let url = this.backend.getUrl + '/profile/skills/Anirudha Jadhav';

            let res = await fetch(url);
            let response = await res.json();

            console.log(response);
        }
    },
    mounted() {
        this.fetchSkills();
    }
}
</script>

<style scoped lang="scss">
#add-skill {
    &:hover {
        i {
            color: $primary !important;
        }
    }
}
</style>
