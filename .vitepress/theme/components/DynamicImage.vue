<script setup>
import {ref } from "vue"
const props = defineProps(['imageid', 'alt', 'title'])
const src = ref(`https://imagedelivery.net/0REzXdw3XtT87nmcqY33OQ/${props.imageid}/688x387`)
const srcset = ref("")

const sizes = [
  {x: "336", y: "189"},
  {x: "420", y: "236"},
  {x: "504", y: "284"},
  {x: "588", y: "331"},
  {x: "688", y: "387"},
  {x: "702", y: "395"},
  {x: "780", y: "439"},
  {x: "840", y: "472"},
  {x: "899", y: "506"},
  {x: "959", y: "539"},
  {x: "1018", y: "573"},
  {x: "1078", y: "606"},
  {x: "1138", y: "640"},
  {x: "1197", y: "673"},
  {x: "1257", y: "707"},
  {x: "1316", y: "740"},
  {x: "1376", y: "774"}
]

sizes.forEach((size) => {
  srcset.value += `https://imagedelivery.net/0REzXdw3XtT87nmcqY33OQ/${props.imageid}/${size.x}x${size.y} ${size.x}w,`
})


</script>
<template>
  <figure>
    <img
      :src="src"
      :srcset="srcset"
      sizes="(min-width: 1120px) 688px, (min-width: 960px) calc(65.71vw - 35px), (min-width: 780px) 688px, (min-width: 380px) calc(87.37vw + 24px), calc(66.67vw + 96px)"
      :alt="alt"
      :title="title"
      width="688"
      height="387"
      loading="lazy"
    />
    <figcaption>
      <slot/>
    </figcaption>
  </figure>
</template>
