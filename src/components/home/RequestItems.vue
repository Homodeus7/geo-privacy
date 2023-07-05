<template>
  <div class="flex flex-col gap-7">
    <div
      class="flex flex-col bg-[--black-middle] border-x-[1px] border-[#2D2E33]"
    >
      <div class="bg-[#27282D] p-3">
        <p class="font-medium">Открытые порты</p>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33] hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('20 / TCP')"
        >
          <p class="font-medium">20 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
        <div
          class="w-full flex justify-center p-3 gap-2 hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('22 / TCP')"
        >
          <p class="font-medium">22 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
        </div>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33] hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('21 / TCP')"
        >
          <p class="font-medium">21 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33] hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('65500 / TCP')"
        >
          <p class="font-medium">65500 / TCP</p>
        </div>
        <div
          class="w-full flex justify-center p-3 gap-2 hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('23 / TCP')"
        >
          <p class="font-medium">23 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
        </div>
      </div>
      <div class="flex justify-between border-b-[1px] border-[#2D2E33]">
        <div
          class="w-full flex justify-center p-3 gap-2 border-r-[1px] border-[#2D2E33] hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('65510 / TCP')"
        >
          <p class="font-medium">65510 / TCP</p>
          <img class="w-5" src="@/assets/img/icon-danger.svg" />
          <img class="w-5" src="@/assets/img/icon-exploit-br.svg" />
        </div>
        <div
          class="w-full flex justify-center p-3 gap-2 hover:bg-[#27282D] active:bg-[#242528] cursor-pointer"
          @click="onClick('65520 / TCP')"
        >
          <p class="font-medium">65520 / TCP</p>
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

<script setup>
import { usePorts } from "@/store/ports";

const portsStore = usePorts();

const onClick = (port) => portsStore.changePort(port);
</script>
