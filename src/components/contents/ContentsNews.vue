<template>
  <div class="contents" id="news">
    <h2 class="title">{{$t("ContentsNews_title")}}</h2>
    <ul>
      <li>
        <!-- {{$t("ContentsNews_li-1-date")}}&emsp;{{$t("ContentsNews_li-1-news")}} -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContentsNews'
}
</script>

<style lang="scss" scoped>
ul {
  list-style: square;
}
</style>