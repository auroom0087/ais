<template>
    <v-container>
        <h2>Участники мероприятия</h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">Номер</th>
                <th class="text-left">ФИО</th>
                <th class="text-left">Статус</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, id) in users" :key="id">
                <td>{{ id+1 }}</td>
                <td>{{ item.last_name }} {{ item.name }} {{ item.second_name }}</td>
                <td>{{ item.isLoggedIn }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                users: [
                    {
                        last_name: 'Кушнарев',
                        name: 'Владислав',
                        second_name: 'Сергеевич',
                        isLoggedIn: false
                    }
                ]
            }
        }
    }
</script>