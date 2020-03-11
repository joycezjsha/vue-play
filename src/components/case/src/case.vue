<template>
    <div class="case-item">
      <iframe class="case-item-content" :src="data" frameborder="no" border="0">
      </iframe>
    </div>
</template>

<script>
    export default {
      name: "singleCase",
      props:['data'],
      data(){
        return {

        }
      }
    }
</script>
<style scoped>
iframe{
  width: 100%;
  height:100%;
}
</style>>
