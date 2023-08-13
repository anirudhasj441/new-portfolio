<!-- <template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script> -->

<template>
    <q-page :style-fn="style_store.setStyle">
        <q-scroll-area class="q-pr-md full-height flex column" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <q-card flat class="" :style="style_store.getHeightStyle">
                <q-card-section class="fit text-center flex flex-center">
                    <div>
                        <div class="" style="font-size: 30vh">
                            404
                        </div>

                        <div class="text-h2 " style="opacity:.4">
                            Oops. Nothing here...
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-scroll-area>
    </q-page>
</template>

<script>
import { styleFunction } from 'src/stores/global-store';

export default {
    data() {
        return {
            style_store: styleFunction()
        }
    }
}
</script>
