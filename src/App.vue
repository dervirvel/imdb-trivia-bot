<template>
  <div id="app">
    <div class="mainContainer">
      <div class="mainContent">
        <header>
          <div class="logoWrapper">
            <img class="logoImg" src="./assets/imdb.png">
          <h1>-Bot</h1>
          </div>
          <p
            class="description"
          >IMDB-BOT is a simple project which fetches trivia about actors and movies.</p>
        </header>
      <chat></chat>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";

export default {
  name: "App",
  components: {
    Chat
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

* {
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: "Baloo Bhaina", sans-serif;
  line-height: 1.2;
}

header {
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
}

.logoWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
}

.logoImg {
  width: 20%;
}

input {
  border: none;
  border-radius: 0.2em;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  margin-right: 1em;
  border-bottom: 0.3rem solid transparent;
  padding: 0.5rem 1rem;
}

@media (min-width: 700px) {
  .mainContent {
    display: flex;
  }

  .chatContainer {
  height: 400px;
  width: 400px;
}
}

.mainContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



.chatContainer {
  box-shadow: rgb(153, 153, 153) 2px 2px 5px;
  border-radius: 10px;
  padding: 15px;
  background-color:  rgba(255, 217, 0, 0.7);
  margin: 0px 20px;
}

.chatContent {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 90%;
}


.chatActions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 7%;
}

.row {
  margin: 10px 10px 0px 10px;
  padding: 8px;
  max-width: 70%;
  min-width: 30%;
  border-radius: 10px;
}

.send {
  align-self: flex-end;
  background-color: rgb(66, 127, 207);
}

.received {
  align-self: flex-start;
  background-color: gainsboro;
}

.description {
  font-size: 1.2em;
}

</style>
