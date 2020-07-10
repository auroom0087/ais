<template>
    <v-container>
        <v-row>
            <v-col lg="3" md="12" sm="12">
            <h2 style="margin-top:12px;">Информация</h2>
                <v-card style="margin-top:15px; margin-left: 10px; margin-right: 10px;">
                    <v-card-title>
                        {{ getUser.last_name }} {{ getUser.name }} {{ getUser.second_name }}
                    </v-card-title>
                    <v-card-text>
                        Данные
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col lg="9" md="12">
                <Events />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import Events from './Events'

    export default {

        components: {
            Events
        },

        data() {
            return {
            }
        },

        async mounted() {
            await this.user_auth()
        },

        computed: mapGetters(['getUser']),

        methods: {
            ...mapActions(['login']),
            async user_auth() {
                this.user = await this.login(this.$route.params.id)
            }
        }
    }
</script>