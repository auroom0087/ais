<template>
    <v-container>
        <h2>Мероприятия</h2>
        <v-card v-for="(d, id) in dateFilt" :key="id" style="margin-bottom: 15px; margin-top: 15px;">
            <v-card-title>{{ d.date }}</v-card-title>
            <v-card-text><v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Номер</th>
                    <th class="text-left">Время начала</th>
                    <th class="text-left">Время окончания</th>
                    <th class="text-left">Название</th>
                    <th class="text-left">Место проведения</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,id) in d.events" :key="item.id" v-bind:class="{isNow: item.isActive}">
                        <td>{{ id + 1}}</td>
                        <td>{{ item.timeStart.toLocaleTimeString() }}</td>
                        <td>{{ item.timeStop.toLocaleTimeString() }}</td>
                        <td><router-link :to="/event/ + id">{{ item.title }}</router-link></td>
                        <td>{{ item.place }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table></v-card-text>
        </v-card>
    </v-container>

</template>

<script>
// import _ from 'underscore'
    export default {
        data() {
            return {
                events: [
                    {
                        id: Date.now(),
                        timeStart: new Date('2020-07-23T10:00:00'),
                        timeStop: new Date('2020-07-23T12:00:00'),
                        title: 'Переписываем АИС',
                        place: '4 корпус, 408 аудитория',
                        isActive: false
                    },
                    {
                        id: Date.now(),
                        timeStart: new Date('2020-07-13T10:00:00'),
                        timeStop: new Date('2020-07-23T12:00:00'),
                        title: 'Переписываем АИС 4',
                        place: '3Д',
                        isActive: false
                    },
                    {
                        id: Date.now() + 1,
                        timeStart: new Date('2020-07-10T05:00:00'),
                        timeStop: new Date('2020-07-10T08:00:00'),
                        title: 'Переписываем АИС 2',
                        place: '4 корпус, 408 аудитория',
                        isActive: false
                    },
                    {
                        id: Date.now() + 3,
                        timeStart: new Date('2020-07-10T07:00:00'),
                        timeStop: new Date('2020-07-10T12:00:00'),
                        title: 'Переписываем АИС 3',
                        place: '4 корпус, 408 аудитория',
                        isActive: false
                    },
                    {
                        id: Date.now() + 2,
                        timeStart: new Date('2020-07-10T07:00:00'),
                        timeStop: new Date('2020-07-10T12:00:00'),
                        title: 'Переписываем АИС 3',
                        place: '4 корпус, 408 аудитория',
                        isActive: false
                    }
                ],

                date: [
                ],

                dateFilt: []
            }
        },

        async mounted() {

            this.sortEvents()

            this.events.forEach(elem => {
                this.date.push(JSON.stringify({
                    date: elem.timeStart.toLocaleDateString(),
                    events: []
                }))
            })

            this.date = Array.from(new Set(this.date))

            this.date.forEach(elem => {
                this.dateFilt.push(JSON.parse(elem))
            })

            this.addEvents()
            this.getBlue()
        },

        methods: {

            sortEvents() {
                this.events = this.events.sort(function (a, b) {
                    if (a.timeStart > b.timeStart) {
                        return 1;
                    }
                    if (a.timeStart < b.timeStart) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            },

            getBlue() {
                for (let i = 0; i < this.events.length; i++) {
                    if (Number(this.events[i].timeStart) < Date.now() && Number(this.events[i].timeStop) > Date.now()) {
                        this.events[i].isActive = true
                    }
                }
            },

            addEvents() {
                
                for (let i = 0; i < this.events.length; i++) {
                    for(let j = 0; j < this.dateFilt.length; j++) {
                        if (this.dateFilt[j].date == this.events[i].timeStart.toLocaleDateString()) {
                            this.dateFilt[j].events.push(this.events[i])
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .isNow {
        color : blue !important;
    }
</style>