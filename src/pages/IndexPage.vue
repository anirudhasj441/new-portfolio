<template>
  <q-page class="q-pb-md" :style-fn="setHeight">
    <q-scroll-area class="q-pr-md" :class="$q.platform.is.mobile ? 'q-pl-md' : ''" style="height: 100%;">
      <q-card flat class="full-width" style="border-radius: 10px;">
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
              :style="height_style">
              <q-img src="/banner_image.svg" style="width: 100%;" :ratio="1"></q-img>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Frontend skill section -->
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

      <!-- Backend Skill Section -->
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

      <!-- Database skill section -->
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

      <!-- Other skill section -->
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
      <!-- <div v-for="skill in frontend_skills" :key="skill.skill" class="text-h6">{{ skill.skill }}</div> -->
    </q-scroll-area>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      bio: '',
      skills: [],
      frontend_skills: [],
      backend_skills: [],
      database_skills: [],
      other_skills: [],
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
    }
  },
  mounted() {
    this.getProfile();
  }
}
</script>
