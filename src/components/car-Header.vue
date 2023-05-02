<template>
  <div class="car-Header">
      <img src="../img/logo.png" height="64" width="152" alt="logo"/>
      <p>вийти</p>
  </div>
</template>

<script>
export default{
    name: "car-Header"
}
</script>


<style>
  .car-Header{

      align-items: center;
      display: flex;
      padding: 20px 150px;
      justify-content: space-between;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  }
  p{
      font-family: "Roboto Light", sans-serif;
      font-size: 14px;
      text-align: center;


  }
</style>