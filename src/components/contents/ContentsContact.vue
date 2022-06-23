<template>
  <div class="contents" id="contact">
    <h2 class="title">{{$t("ContentsContact_title")}}</h2>

    <form method="post" target="submitComplete" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqkvIPJKsS6GAeiVrkgsSYkjrx9vNt5eYFC4-5fCX9MS-4BQ/formResponse">
    
      <div class="form-element" id="name">
        <input type="text" name="entry.1744693801" :placeholder="$t('ContentsContact_name')" v-model="state.name">
        <span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
      </div>

      <div class="form-element" id="mail">
        <input type="email" name="emailAddress" :placeholder="$t('ContentsContact_email')" v-model="state.mail">
        <span v-if="v$.mail.$error">{{ v$.mail.$errors[0].$message }}</span>
      </div>

      <div class="form-element" id="subject">
        <input type="text" name="entry.148681851" :placeholder="$t('ContentsContact_subject')" v-model="state.subject">
        <span v-if="v$.subject.$error">{{ v$.subject.$errors[0].$message }}</span>
      </div>

      <div class="form-element" id="message">
        <textarea name="entry.1885764049" cols="30" rows="10" :placeholder="$t('ContentsContact_message')" v-model="state.message"></textarea>
        <span v-if="v$.message.$error">{{ v$.message.$errors[0].$message }}</span>
      </div>
      
      <div class="form-element form-buttons-wrapper">
        <div class="form-buttons">
          <div>
            <input type="submit" :value="$t('ContentsContact_submit')" class="form-button" @click="submitForm">
          </div>
          <div>
            <input type="reset" :value="$t('ContentsContact_reset')" id="reset" class="form-button">
          </div>
        </div>
      </div>

      <iframe name="submitComplete" srcdoc="<p>Submitted!</p>" style="display:none;"></iframe>
    
    </form>
    
  </div>
</template>


<script>
import useValidate from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue' 

export default {
  name: 'ContentsContact',
  setup() {
    const state = reactive({
      name: "",
      mail: "",
      subject: "",
      message: "",
    })
    const rules = computed(() => {
      return {
        name: { required, maxLength: maxLength(50) },
        mail: { required, email },
        subject: { required, maxLength: maxLength(100) },
        message: { required, maxLength: maxLength(2000) }
      }
    })

    const v$ = useValidate(rules, state)

    return { state, v$ }
  },

  methods: {
    submitForm() {
      this.v$.$validate() //checks all inputs
      if (!this.v$.$error) { // if ANY fail validation
        alert("Form successfully submitted.")
        setTimeout(() => {
          document.getElementById("reset").click();
        }, 500)
      } else {
        alert("Form faild validation")
      }
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
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>