<template>
    <v-container>
        <h2>Мероприятия</h2>
        <v-divider></v-divider>

        <v-card>
            <v-card-title>Таблица</v-card-title>
            <v-card-text><v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Номер</th>
                    <th class="text-left">Дата</th>
                    <th class="text-left">Время начала</th>
                    <th class="text-left">Время окончания</th>
                    <th class="text-left">Название</th>
                    <th class="text-left">Место проведения</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,id) in events" :key="item.id" v-bind:class="{isNow: item.isActive}">
                        <td>{{ id + 1}}</td>
                        <td>{{ item.timeStart.toLocaleDateString()}}</td>
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
                        id: Date.now() + 1,
                        timeStart: new Date('2020-07-10T05:00:00'),
                        timeStop: new Date('2020-07-10T08:00:00'),
                        title: 'Переписываем АИС 2',
                        place: '4 корпус, 408 аудитория',
                        isActive: false
                    },
                    {
                        id: Date.now() + 2,
                        timeStart: new Date('2020-07-10T07:00:00'),
                        timeStop: new Date('2020-07-15T12:00:00'),
                        title: 'Переписываем АИС 2',
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

            for (let i = 0; i < this.events.length; i++) {
                
                this.date.push({
                    date: this.events[i].timeStart.toLocaleDateString(),
                    events: []
                })

                for (let j = 0; j < this.date.length; j++) {
                    if(this.date[j].date != this.events[i].timeStart.toLocaleDateString()) {
                        this.date.push({
                            date: this.events[i].timeStart.toLocaleDateString(),
                            events: []
                        })
                    }
                }
            }
            
            console.log(this.date)

            // console.log(this.groupByDate(this.events))
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

            for (let i = 0; i < this.events.length; i++) {
                if (Number(this.events[i].timeStart) < Date.now() && Number(this.events[i].timeStop) > Date.now()) {
                    this.events[i].isActive = true
                }

            }
        },

        methods: {
            groupByDate(arr) {
                //свертка массива во временный объект, с датами в качестве ключей
                const temp = arr.reduce((acc, elem) => {
                    // делим строку по пробелу и извлекаем 0й элемент '2018-03-05 12:00' -> '2018-03-05'
                    const date = elem.date;
                    //если ключа-даты еще нет в объекте, записываем туда пустой массив
                    if(!acc[date]) {
                    acc[date] = [];
                    }
                    // ложим текущий элемент в соответствующий массив
                    acc[date].push(elem);
                    return acc;
                }, {});
                // извлекаем все ключи получившегося объекта в массив
                // и преобразуем массив ключей в массив значений
                return Object.getOwnPropertyNames(temp).map(k => temp[k]);
                }
        }
    }
</script>

<style scoped>
    .isNow {
        color : blue !important;
    }
</style>