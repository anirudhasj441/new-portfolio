<template>
    <q-page :style-fn="styleFunction.setStyle">
        <q-scroll-area class="fit skills-container">
            <div class="fit">
                <q-card flat class="q-mb-lg q-mx-auto"
                    style="width: 800px; max-width: 100%; background-color: transparent;">
                    <q-card-section>
                        <div class="text-h6 text-center">Skills</div>
                    </q-card-section>
                    <q-card-section>
                        <div v-if="!skillsLoaded" class="row q-col-gutter-lg">
                            <div v-for="i in 3" :key="i" class="col-12 col-md-4">
                                <q-card square class="full-width" style="background-color: transparent">
                                    <q-card-section align="center" class="q-pa-none">
                                        <!-- <q-icon :name="`img:${!skill.icon ? '/projects.png' : skill.icon}`"
                                            size="80px"></q-icon>
                                        <q-btn flat icon="edit" color="white" class="absolute-bottom-right"
                                            @click="openUploadSkillIconDialog(skill)"></q-btn> -->
                                        <q-skeleton type="rect" square height="80px"></q-skeleton>
                                    </q-card-section>
                                    <q-card-section>
                                        <!-- <div class="text-h6 text-bold text-primary">{{ skill.skill }}</div> -->
                                        <q-skeleton type="text"></q-skeleton>
                                    </q-card-section>
                                    <q-card-section class="q-py-none">
                                        <!-- <div class="text-h6 text-dark">{{ skill.category ? skill.category : 'Other' }}</div> -->
                                        <q-skeleton type="text" width="50%"></q-skeleton>
                                    </q-card-section>
                                    <q-card-actions align="right" class="q-gutter-x-md">
                                        <!-- <q-btn dense unelevated icon="edit" color="primary"
                                            @click="openEditSkillForm(skill)"></q-btn>
                                        <q-btn dense unelevated icon="delete" color="red"
                                            @click="deleteSkill(skill._id)"></q-btn> -->
                                        <q-skeleton type="QBtn" width="20%"></q-skeleton>
                                        <q-skeleton type="QBtn" width="20%"></q-skeleton>
                                    </q-card-actions>
                                </q-card>
                            </div>

                        </div>
                        <div v-else class="row q-col-gutter-lg">
                            <div v-for="skill in skills" :key="skill._id" class="col-12 col-md-4">
                                <q-card square class="full-width" style="background-color: transparent">
                                    <q-card-section align="center">
                                        <q-icon :name="`img:${!skill.icon ? '/projects.png' : skill.icon}`"
                                            size="80px"></q-icon>
                                        <q-btn flat icon="edit" color="white" class="absolute-bottom-right"
                                            @click="openUploadSkillIconDialog(skill)"></q-btn>
                                    </q-card-section>
                                    <q-card-section class="bg-white">
                                        <div class="text-h6 text-bold text-primary">{{ skill.skill }}</div>
                                    </q-card-section>
                                    <q-card-section class="bg-white q-py-none">
                                        <div class="text-h6 text-dark">{{ skill.category ? skill.category : 'Other' }}</div>
                                    </q-card-section>
                                    <q-card-actions align="right" class="bg-white">
                                        <q-btn dense unelevated icon="edit" color="primary"
                                            @click="openEditSkillForm(skill)"></q-btn>
                                        <q-btn dense unelevated icon="delete" color="red"
                                            @click="deleteSkill(skill._id)"></q-btn>
                                    </q-card-actions>
                                </q-card>
                            </div>
                            <div class="col-12 col-md-4">
                                <q-btn id="add-skill" flat color="primary" size="100%" class="fit"
                                    @click="addSkillDialog = true" style="border: dashed 3px white;">
                                    <q-icon name="add" color="white" size="100px"></q-icon>
                                </q-btn>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </q-scroll-area>
        <q-dialog v-model="addSkillDialog">
            <add-skill-form @closeDialog="addSkillDialog = false" @added="onAdded"></add-skill-form>
        </q-dialog>
        <q-dialog v-model="editSkillDialog">
            <edit-skill-form :skill-obj="editSkill" @closeDialog="editSkillDialog = false"
                @edited="onEdited"></edit-skill-form>
        </q-dialog>
        <q-dialog v-model="uploadSkillIconDialog">
            <upload-skill-icon :skill-obj="editSkill" @closeDialog="uploadSkillIconDialog = false"
                @uploaded="onIconUploaded"></upload-skill-icon>
        </q-dialog>
    </q-page>
</template>

<script>
import { styleFunction, backendStore } from '../stores/global-store';
import { authStore } from 'src/stores/auth-store';
import AddSkillForm from 'src/components/AddSkillForm.vue';
import EditSkillForm from 'src/components/EditSkillForm.vue';
import UploadSkillIcon from 'src/components/UploadSkillIcon.vue';

const backend = backendStore();
const auth_store = authStore();

export default {
    components: {
        AddSkillForm,
        EditSkillForm,
        UploadSkillIcon
    },
    data() {
        return {
            skills: [],
            editSkill: {},
            skillsLoaded: false,
            addSkillDialog: false,
            editSkillDialog: false,
            uploadSkillIconDialog: false,
            styleFunction: styleFunction(),
            backend,
            auth_store
        }
    },
    methods: {
        async fetchSkills() {
            let url = this.backend.getUrl + '/profile/Anirudha Jadhav/skill';

            let res = await fetch(url);
            let response = await res.json();

            this.skills = response.data;
            this.skillsLoaded = true;
        },
        onAdded(response) {
            this.addSkillDialog = false;
            this.fetchSkills();
            console.log(response);
        },
        onEdited(response) {
            this.editSkillDialog = false;
            this.fetchSkills();
        },
        onIconUploaded(response) {
            this.uploadSkillIconDialog = false;
            this.fetchSkills();
        },
        openEditSkillForm(skill) {
            this.editSkill = skill;
            this.editSkillDialog = true;
        },
        openUploadSkillIconDialog(skill) {
            this.editSkill = skill;
            this.uploadSkillIconDialog = true;
        },
        async deleteSkill(id) {
            let url = this.backend.getUrl + '/profile/Anirudha Jadhav/skill/' + id;

            let res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + this.auth_store.getToken
                }
            })

            let response = await res.json();

            console.log(response);
            this.fetchSkills();
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

        border-color: $primary !important;
    }
}
</style>
