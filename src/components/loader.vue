<template>
  <div class="loader-wrapper">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.loader-wrapper {
  position: absolute;
  background-color: #000000ad;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.lds-ripple {
  display: inline-block;
  position: relative;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
