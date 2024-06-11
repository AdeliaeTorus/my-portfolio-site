<template>
  <div class="contents" id="bio">
    <h2 class="title">{{$t("ContentsBio_title")}}</h2>
    <dl>
      <dt>{{$t("ContentsBio_1-date")}}</dt>
      <dd>{{$t("ContentsBio_1-event")}}</dd>
      <dt>{{$t("ContentsBio_2-date")}}</dt>
      <dd>{{$t("ContentsBio_2-event")}}</dd>
      <dt>{{$t("ContentsBio_3-date")}}</dt>
      <dd>{{$t("ContentsBio_3-event")}}</dd>
      <dt>{{$t("ContentsBio_4-date")}}</dt>
      <dd>{{$t("ContentsBio_4-event")}}</dd>
      <dt>{{$t("ContentsBio_5-date")}}</dt>
      <dd>{{$t("ContentsBio_5-event")}}</dd>
      <dt>{{$t("ContentsBio_6-date")}}</dt>
      <dd>{{$t("ContentsBio_6-event")}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ContentsBio'
}
</script>

<style lang="scss" scoped>
#bio dl {
  padding-left: 1em;

  & > dt {
    float: left;
  }

  & > dd {
    padding-left: 4em;
  }
}
</style>