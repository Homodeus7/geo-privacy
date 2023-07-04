<template>
  <div
    class="flex flex-col p-5 gap-7 w-full bg-[--black-middle] rounded-md border-[1px] border-[#2D2E33]"
  >
    <h2 class="font-medium text-3xl">21 TCP</h2>
    <div
      class="p-4 bg-[--black-middle] rounded-sm border-[1px] border-[#2D2E33]"
    >
      <p class="font-medium">
        Гироскопический прибор устойчив. Параметр Родинга-Гамильтона позволяет
        исключить из рассмотрения уходящий центр подвеса, основываясь на
        ограничениях, наложенных на систему. Ротор требует большего внимания к
        анализу ошибок, которые даёт колебательный момент. Под воздействием
        изменяемого вектора гравитации прецессионная теория гироскопов
        колебательно вращает газообразный уход гироскопа.
      </p>
    </div>
    <div class="w-full flex items-center justify-between p-3 gap-2">
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-danger.svg" />
        <p class="font-medium">Найдено уязвимостей:</p>
        <p class="font-medium">3</p>
      </div>
      <div class="flex items-center gap-2">
        <v-btn size="x-small" class="tumb" color="#2D2E33">
          <img src="@/assets/img/icon-g-arrow.svg" />
        </v-btn>
        <v-btn size="x-small" class="tumb" color="#2D2E33">
          <img src="@/assets/img/icon-r-arrow.svg" />
        </v-btn>
      </div>
    </div>
    <div
      class="flex flex-col bg-[--black-middle] border-x-[1px] border-[#2D2E33]"
    >
      <div class="bg-[#27282D] p-3">
        <p class="font-medium">Открытые порты</p>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33]"
        >
          <p class="font-medium">20 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
        <div class="w-full flex justify-center p-3 gap-2">
          <p class="font-medium">22 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
        </div>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33]"
        >
          <p class="font-medium">21 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33]"
        >
          <p class="font-medium">65500 / TCP</p>
        </div>
        <div class="w-full flex justify-center p-3 gap-2">
          <p class="font-medium">22 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
        </div>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33]"
        >
          <p class="font-medium">65500 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
        <div class="w-full flex justify-center p-3 gap-2">
          <p class="font-medium">65500 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col bg-[--black-middle] border-x-[1px] border-[#2D2E33]"
    >
      <div class="bg-[#27282D] p-3">
        <p class="font-medium">Найденные URL</p>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div class="w-full flex p-3 gap-2">
          <p class="font-medium">https://geoprivacy.com</p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col bg-[--black-middle] border-x-[1px] border-[#2D2E33]"
    >
      <div class="bg-[#27282D] p-3">
        <p class="font-medium">Связанные адреса</p>
      </div>
      <div class="flex flex-col border-b-[1px] border-[#2D2E33]">
        <div class="w-full flex p-3 gap-2 border-b-[1px] border-[#2D2E33]">
          <p class="font-medium">https://geoprivacy.privat.com</p>
        </div>
        <div class="w-full flex p-3 gap-2">
          <p class="font-medium">https://geoprivacy.privat.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-btn .tumb {
  max-width: 22px !important;
  padding: 20px !important;
}
</style>
