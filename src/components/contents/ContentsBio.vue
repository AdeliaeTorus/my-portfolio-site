<template>
  <div class="contents" id="bio">
    <h2 class="title">Bio</h2>
    <dl>
      <dt>1999</dt>
      <dd>Born in Osaka, Japan</dd>
      <dt>2006-2012</dt>
      <dd>Aoba-Hatsugano Elementary school, Izumi city</dd>
      <dt>2012-2015</dt>
      <dd>Yamadai Junior high school, Kishiwada city</dd>
      <dt>2015-2018</dt>
      <dd>Wakayamakita high school, Wakayama prefecture</dd>
      <dt>2020-2023</dt>
      <dd>BSc Mathematics (Hons)&emsp;The Open University</dd>
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