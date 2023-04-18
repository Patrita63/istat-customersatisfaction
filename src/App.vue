<template>
  <div id="app">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-Regular.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-SemiBold.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-SemiBoldItalic.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-Black.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-Bold.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-BoldItalic.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-ExtraLight.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-ExtraLightItalic.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-Italic.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-Light.ttf" type="font/ttf" crossorigin="anonymous">
    <link rel="preload" as="font" href="./Titillium_Web/TitilliumWeb-LightItalic.ttf" type="font/ttf" crossorigin="anonymous">
    <router-view :key="$route.path" />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  body{ height:100vh; margin:0;   display:flex; 
  flex-direction:column; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh
}

.footer{
  min-width: 100%;
  min-height: 200px;
  padding: 50px;
  margin-top:auto; 
  color: rgba(0, 0, 0, 0.5);
  bottom:0
}

</style>
