<template>
    <q-page :style-fn="style_store.setStyle">
        <q-scroll-area class="q-pr-md full-height flex column" :class="$q.platform.is.mobile ? 'q-pl-md' : ''">
            <q-card flat class="" :style="style_store.getHeightStyle">
                <q-card-section class="fit text-center flex flex-center">
                    <div>
                        <div class="" style="font-size: 25vh">
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
