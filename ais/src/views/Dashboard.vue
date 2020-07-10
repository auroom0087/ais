<template>
    <v-container>
            <v-row>
                <v-col lg="4">
                <v-card>
            <v-card-title>Регистрация</v-card-title>
            <v-card-text>
                <p>Выберите файл с участниками</p>
                <form enctype="multipart/form-data" @submit.prevent>
                    <input 
                        type="file" 
                        ref="file"
                        accept=".xlsx" 
                        @change="onSelect" 
                        id="file-input">
                    <button type="submit">Загрузить</button>
                </form>
            </v-card-text>
                    
                    </v-card>
                </v-col>
            </v-row>
        
    </v-container>
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