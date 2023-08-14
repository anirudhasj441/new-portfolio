<template>
    <q-page class="q-pb-md" :style-fn="style_store.setStyle">
        <q-scroll-area class="q-pr-md" :class="$q.platform.is.mobile ? 'q-pl-md' : ''" style="height: 100%;">
            <q-card flat class="full-width intro" style="border-radius: 10px;">
                <q-card-section class="q-px-lg">
                    <div class="row q-col-gutter-x-lg items-center">
                        <div class="col-xs-12 col-md-6 flex flex-center" :style="height_style">
                            <div class="info">
                                <div class="" style="font-size: 1rem;">Hello I am,</div>
                                <div class="text-h2 text-bold text-primary">Anirudha Jadhav</div>
                                <div class="bio">
                                    {{ bio }}
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6 flex flex-center" :class="$q.platform.is.mobile ? 'order-first' : ''"
                            :style="style_store.getHeightStyle">
                            <q-img src="/banner_image.svg" style="width: 100%;" :ratio="1"></q-img>
                        </div>
                    </div>
                </q-card-section>
            </q-card>

            <!-- projects section -->
            <div v-if="projects.length > 0">
                <div class="text-h5 text-bold q-my-md q-mt-lg">Projects</div>
                <div class="row q-col-gutter-md">
                    <div class="col-xs-6 col-md-3" v-for="project in projects" :key="project.skill">
                        <q-card flat clickable class="project-card">
                            <q-img :src="'/api' + project.img" style="width: 100%;" :ratio="16 / 9">

                            </q-img>
                            <!-- <q-card-section class="text-center">
                            </q-card-section> -->
                            <q-card-section>
                                <div class=" flex items-center justify-between q-gutter-x-sm no-wrap">
                                    <div class="text-h6">{{ project.title }}</div>
                                    <q-space></q-space>
                                    <a v-if="project.git_repo" :href="project.git_repo" class="project-link" target="_blank"
                                        rel="noopener noreferrer">
                                        <q-icon name="bi-github" style="font-size: 1.5rem;"></q-icon>
                                    </a>
                                    <a v-if="project.link" :href="project.link" class="project-link" target="_blank"
                                        rel="noopener noreferrer">
                                        <q-icon name="bi-box-arrow-up-right" style="font-size: 1.5rem;"></q-icon>
                                    </a>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>

            <!-- Frontend skill section -->
            <div v-if="frontend_skills.length > 0">
                <div class="text-h5 text-bold q-my-md q-mt-lg">Frontend</div>
                <div class="row q-col-gutter-md">
                    <div class="col-xs-6 col-md-3" v-for="skill in frontend_skills" :key="skill.skill">
                        <q-card flat>
                            <q-card-section class="text-center">
                                <q-img :src="'/api' + skill.icon" style="width: 50px;" :ratio="1"></q-img>
                            </q-card-section>
                            <q-card-section>
                                <div class="text-h6 text-center">{{ skill.skill }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>

            <!-- Backend Skill Section -->
            <div v-if="backend_skills.length > 0">
                <div class="text-h5 text-bold q-my-md q-mt-lg">Backend</div>
                <div class="row q-col-gutter-md">
                    <div class="col-xs-6 col-md-3" v-for="skill in backend_skills" :key="skill.skill">
                        <q-card flat>
                            <q-card-section class="text-center">
                                <q-img :src="'/api' + skill.icon" style="width: 50px;" :ratio="1"></q-img>
                            </q-card-section>
                            <q-card-section>
                                <div class="text-h6 text-center">{{ skill.skill }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>

            <!-- Database skill section -->
            <div v-if="database_skills.length > 0">
                <div class="text-h5 text-bold q-my-md q-mt-lg">Database</div>
                <div class="row q-col-gutter-md">
                    <div class="col-xs-6 col-md-3" v-for="skill in database_skills" :key="skill.skill">
                        <q-card flat>
                            <q-card-section class="text-center">
                                <q-img :src="'/api' + skill.icon" style="width: 50px;" :ratio="1"></q-img>
                            </q-card-section>
                            <q-card-section>
                                <div class="text-h6 text-center">{{ skill.skill }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>

            <!-- Other skill section -->
            <div v-if="other_skills.length > 0">
                <div class="text-h5 text-bold q-my-md q-mt-lg">Others</div>
                <div class="row q-col-gutter-md">
                    <div class="col-xs-6 col-md-3" v-for="skill in other_skills" :key="skill.skill">
                        <q-card flat>
                            <q-card-section class="text-center">
                                <q-img :src="'/api' + skill.icon" style="width: 50px;" :ratio="1"></q-img>
                            </q-card-section>
                            <q-card-section>
                                <div class="text-h6 text-center">{{ skill.skill }}</div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </div>
            <!-- <div v-for="skill in frontend_skills" :key="skill.skill" class="text-h6">{{ skill.skill }}</div> -->
            <CumstomFooter />
        </q-scroll-area>
    </q-page>
</template>
<script>
import { styleFunction } from '../stores/global-store';
import CumstomFooter from '../components/CustomFooter.vue';
import { createMetaMixin } from 'quasar'
export default {
    components: {
        CumstomFooter
    },
    mixins: [
        createMetaMixin({
            title: "Anirudha Jadhav: Portfolio",
            meta: {
                description: { name: "description", content: "Anirudha Jadhav Web Developer" },
                keywords: { name: "keywords", content: "Anirudha, Jadhav, Anirudha Jadhav, Web Developer, Programmer, portfolio, resume, python, html, css, javascript, python developer, javascript developer, vue, vue js, single page application" }
            }
        })
    ],
    data() {
        return {
            bio: '',
            skills: [],
            frontend_skills: [],
            backend_skills: [],
            database_skills: [],
            other_skills: [],
            projects: [],
            style_store: styleFunction(),
            height_style: null
        }
    },
    methods: {
        setHeight: function (offset) {
            let height_style = {
                height: offset ? `calc(100vh - ${offset}px)` : '100vh'
            }
            this.height_style = height_style;
            return height_style
        },
        getProfile: function () {
            let url = "/api/get_profile/";
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onload = () => {
                let response = JSON.parse(xhr.response);
                console.log(response);
                this.bio = response.data.bio;
                this.skills = response.data.skills;
                this.skills.forEach((skill) => {
                    switch (skill.category) {
                        case 'frontend':
                            this.frontend_skills.push(skill);
                            break;
                        case 'backend':
                            this.backend_skills.push(skill);
                            break
                        case 'database':
                            this.database_skills.push(skill);
                            break
                        default:
                            this.other_skills.push(skill);
                            break;
                    }
                });

            }
            xhr.send();
        },
        getProjects: function () {
            let url = "/api/get_projects/";
            const xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onload = () => {
                let response = JSON.parse(xhr.response);
                console.log(response);
                this.projects = response.data;
            }
            xhr.send();
        }
    },
    mounted() {
        this.getProfile();
        this.getProjects();
    }
}

//new file
</script>
<style lang="scss">
.project-link {
    color: white;
    transition: color 0.3s;

    &:hover {
        color: $primary;
    }
}

// .q-card.project-card {
//     transition: transform 0.3s ease-in;

//     &:hover {
//         transform: translateY(-20px);
//         z-index: 999;
//     }
// }
</style>
