<template lang="pug">
.login-container
  .login-layout
      .title(style="margin-bottom: 10px")
        | Chime Langauge School
      b-field
        b-input(size='is-medium' style="margin-bottom:10px"  placeholder="Id")
      b-field
        b-input(size='is-medium' type='password' style="margin-bottom:10px" 
          password-reveal placeholder="Password")
      b-button(size='is-medium' type='is-primary') Login
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
}
</script>
<style scoped>
.login-layout{
    height: 190px;
    width: 400px;
    margin-top: -190px;
    margin-left: -200px;  
}
.login-container{
  position: absolute;
  top:50%;
  left:50%;
}
.title{
  font-size: 20px;
  color: white;
}
button{
  width :100%;
}

@media screen and (max-width:425px){
  .login-layout{
    width: 200px;
    margin-left: -100px;
  }
}

</style>

