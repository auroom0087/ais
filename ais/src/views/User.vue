<template>
    <div>
        <v-card class="mx-auto" tile width="96%">
            <v-container class="pa-2">
                <v-row>
                    <v-col class="pa-0" cols="12" sm="1">
                        <v-avatar color="primary" size="66" class="initials">
                            <span class="white--text headline">{{first_letters(item.surname, item.name)}}</span>
                        </v-avatar>
                    </v-col>
                    <v-col class="pa-0">
                        <v-list-item color="rgba(0, 0, 0, .4)">
                            <v-list-item-content class="pt-1 text">
                                <v-list-item-title class="title">{{ item.name + ' ' + item.second_name + ' ' + item.surname}}</v-list-item-title>
                                <v-list-item-subtitle>Организация: {{ item.organization }}</v-list-item-subtitle>
                                <v-list-item-subtitle>Идентификатор пользователя: {{ item.user_id }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="4"  v-for="n in [1,2,3,4,5,6]" v-bind:key="n">
                    <v-card
                        class="mx-auto"
                        max-width="96%"
                    >
                        <v-img
                        src="https://bloknotanapa.ru/thumb/873x0xcut/upload/iblock/954/1-_1_.jpg"
                        height="200px"
                        ></v-img>

                        <v-card-title>
                        Дембель Декабрь-2020
                        </v-card-title>

                        <v-card-actions>

                        <v-btn
                            color="purple"
                            text
                        >
                            Перейти
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
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
                item: {'name': 'Сергей', 'surname': 'Храмов', 'second_name': 'Иванович', 'organization': '2 пехотно-псевдонаучная рота им. М. Палахова', 'user_id': 'Сережа, вставь сам, мне лень'},
                show: false,
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
            },
            first_letters(name, surname) {
                let fl = surname[0]
                let sl = name[0]
                return fl+sl
            }
        }
    }
</script>

<style scoped>
    .initials {display: block; margin: 0 auto; line-height: 72px;}
    @media (max-width: 600px) {
        .text {text-align: center;}
    }
</style>