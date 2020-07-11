<template>
    <v-card>
        <v-card-title>Регистрация</v-card-title>
        <v-card-text>
            <p>Выберите файл с участниками</p>
            <form enctype="multipart/form-data" @submit.prevent>
                <v-file-input
                    label="Файл с участниками"
                    filled
                    prepend-icon="mdi-account-multiple-outline"
                    id="file-input"
                    accept=".xlsx" 
                    @change="onSelect" 
                ></v-file-input>
                <v-btn color="purple darken-4" tile class="button">Загрузить</v-btn>
            </form>
            <v-btn color="purple darken-4 mt-3" tile class="button">Скачать файл</v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                file: ''
            }
        },

        methods: {

            onSelect() {
                const file = this.$refs.file.files[0]
                this.file = file
            },

            async onSubmin() {
                const formData = new FormData()
                formData.append('file', formData)

                await axios.post('http://127.0.0.1:3000/api/upload', formData)
                console.log("UPLOAD")
            }, 

            handleFileUpload() {
                console.log(this.$refs.file.files[0])
                this.file = this.$refs.file.files[0];
            },

            upload(event) {
                let data = new FormData();
                data.append('name', 'my-picture');
                data.append('file', event.target.files[0]);

                let config = {
                        header : {
                            'Content-Type' : 'multipart/form-data'
                        }
                    }

                axios.put(
                    'http://127.0.0.1:3000/api/upload', 
                    data,
                    config
                    ).then(
                        response => {
                            console.log('image upload response > ', response)
                        }
                    )
                }
            }
        }
</script>

<style scoped>
   .button {color: #fff;}
</style>