<template>
  <v-container>

    <h2>Приветствуем участников конференции</h2>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-row style="margin-top: 20px;">
    <v-col cols="12" sm="6" md="4">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src='https://www.era-tehnopolis.ru/upload/iblock/af5/333.jpg'
        >
          <v-card-title>Программа</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
    Почему он используется?</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="purple darken-4"
            text
          >
            Подробнее
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src='http://www.patriot-expo.ru/media/gallery/big/2637/4331579430.jpg'
        >
          <v-card-title>Участники</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
    Почему он используется?</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="purple darken-4"
            text
          >
            Подробнее
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          src='https://storage.myseldon.com/news_pict_01/01E805ACEB4D05B1E5FA65B94A73EC6A'
        >
          <v-card-title>Карта</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
    Почему он используется?</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="purple darken-4"
            text
          >
            Подробнее
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<style scoped>
  .text--primary {height: 150px; overflow: hidden;}
</style>