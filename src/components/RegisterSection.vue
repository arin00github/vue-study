t
<template>
  <div>
    <form>
      <div class="form-control">
        <label for="form-name">이름</label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="이름 입력"
          v-model="form.name"
        />
      </div>
      <div class="radio-group form-control">
        <div class="radio-set">
          <input type="radio" id="10age" value="10" v-model="form.age" />
          <label for="10age">10age</label>
        </div>
        <div class="radio-set">
          <input type="radio" id="20age" value="20" v-model="form.age" />
          <label for="10age">20age</label>
        </div>
        <div class="radio-set">
          <input type="radio" id="30age" value="30" v-model="form.age" />
          <label for="10age">30age</label>
        </div>
      </div>
      <div class="form-control">
        <select
          name="auth_means"
          id="form-auth_means"
          v-model="form.auth_means"
          placeholder="인증수단 선택"
        >
          <option value="naver">네이버</option>
          <option value="kakao">카카오</option>
        </select>
      </div>
      <div class="form-control">
        <input type="checkbox" id="agree-check" v-model="form.agree" />
        <label for="agree-check">개인수집정보 동의</label>
      </div>
      <div>
        <button @click="handleSubmit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "RegisterSection",
  data() {
    return {
      form: {
        name: "",
        auth_means: undefined,
        agree: false,
        age: undefined,
      },
    };
  },
  methods: {
    handleSubmit(e: any) {
      e.preventDefault();
      const newData = this.form;
    },
  },
});
</script>

<style>
.form-control {
  padding-bottom: 14px;
}
.form-control:first-child {
  padding-top: 30px;
}
.radio-group {
  display: flex;
  justify-content: center;
}

.radio-set {
  margin-left: 12px;
}
</style>
