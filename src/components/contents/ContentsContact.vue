<template>
  <div class="contents" id="contact">
    <h2 class="title">Contact</h2>

    <form method="post" target="submitComplate" @submit="checkForm" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqkvIPJKsS6GAeiVrkgsSYkjrx9vNt5eYFC4-5fCX9MS-4BQ/formResponse">
    
      <div class="form-element" id="name">
        <input type="text" name="entry.1744693801" placeholder="Name">
      </div>

      <div class="form-element" id="mail">
        <input type="email" name="emailAddress" placeholder="Email">
      </div>

      <div class="form-element" id="subject">
        <input type="text" name="entry.148681851" placeholder="Subject">
      </div>

      <div class="form-element" id="message">
        <textarea name="entry.1885764049" cols="30" rows="10" placeholder="Message"></textarea>
      </div>
      
      <div class="form-element form-buttons">
        <div >
          <input type="submit" value="Submit" class="form-button" @click="notification">
        </div>
        <div id="form-button">
          <input type="reset" value="Reset" id="reset" class="form-button">
        </div>
      </div>

      <iframe name="submitComplate" srcdoc="<p>Submitted!</p>" style="display:none;"></iframe>
    
    </form>
    
  </div>
</template>


<script>
export default {
  name: 'ContentsContact',
  methods: {
    notification: function() {
      setTimeout(() => {
        alert("Submitted!");
        document.getElementById("reset").click();
      }, 1000);
    }
  }


}
</script>


<style lang="scss" scoped>
form {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

input, textarea {
  border-radius: 0px;
  border: inset var(--sub-color);

  font-family: 'Noto Serif JP', serif;
  background-color: var(--main-color);
  color: var(--sub-color);
  width: 97%;

  &::placeholder {
    color: var(--sub-color);
  }
}

.form-element {
  padding-top: 1%;
  padding-bottom: 1%;
  
}

.form-button {
  
  &:hover {
    background-color: var(--sub-color);
    color: var(--main-color);
    transform: scale(1.1);
    transition-duration: 0.4s;
    cursor: pointer;
  }
}

.form-buttons {
  padding: 0 33%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>