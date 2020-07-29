<template>
  <div class="chatContainer">
    <div class="chatContent">
      <transition-group class="flexContainer" name="fadein" tag="p">
        <div
          :class="{ question: !m.isAnswer, answer: m.isAnswer}"
          :key="m.text + i"
          v-for="(m, i) in messages"
          class="row"
        >{{ m.text }}</div>
      </transition-group>
    </div>
    <div class="chatActions">
      <input
        v-focus
        v-model="message"
        @keyup.enter="addMessage(message)"
        type="text"
        placeholder="insert actor name here"
      />
      <md-button @click="addMessage(message)" class="md-fab md-primary">
        <md-icon>send</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data: function() {
    return {
      lastMessage: "",
      message: "",
      messages: [],
      answer: "",
      scrapeType: "",
      id: "",
      corsUrl: "https://cors-anywhere.herokuapp.com/",
      cheerio: require('cheerio'),
      triviaList: [],
      pHolder: [],
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus;
      }
    }
  },
  created: function() {
    this.addMessage("About which actor/actress or movie would you like to get trivia? 👏", true);
  },
  methods: {
    addMessage: async function(message, isAnswer = false) {
      if (!message) {
        return;
      }
      this.message.trim();
      let msg = {
        text: message,
        isAnswer
      };
      this.messages.push(msg);
      this.lastMessage = this.message;
      this.message = "";
      if (!isAnswer) {
        let response;
        try {
          response = await this.scrapeUrl();
          console.log(response);
        } catch (error) {
          console.error(error);
          this.addMessage("⛔", true);
          this.scrollToEnd();
        }
        this.addMessage(response, true);
        //this.addMessage(response.data.value, true);
        setTimeout(this.scrollToEnd, 100);
      }
    },
    fetchUrl: async function(url) {
      try {
        const { data } =  await this.axios.get(url, {'headers': {'X-Requested-With': 'XMLHttpRequest'}});
      return data;
      } catch {
        console.error('ERROR: An error occurred while trying to fetch the url:' + url);
      }
    },
    scrapeUrl: async function() {
      const url = this.corsUrl + "https://m.imdb.com/find?q="+ this.lastMessage.replace(" ", "+") + "&ref_=nv_sr_sm";
      const data = await this.fetchUrl(url);
      const $ = this.cheerio.load(data);
      this.scrapeType = $('.col-xs-12').find('.findSectionHeader').find('a').attr('name');
      const id_string = $('.col-md-6').find('a').attr('href');
      this.id = id_string.split('/')[2]
      return(this.scrapeId(this.id));
    },
    scrapeId: async function() {
      let url;
      if (this.scrapeType == 'nm') {
        url =  this.corsUrl + 'https://m.imdb.com/name/' + this.id + '/trivia?ref_=m_nm_dyk_trv';
      } else {
        url =  this.corsUrl + 'https://m.imdb.com/title/' + this.id + '/trivia?ref_=fn_al_tt_0';
      }
      const data = await this.fetchUrl(url);
      const $ = this.cheerio.load(data);
      $('.list').children().find('p').each((i, elem) => {if (i % 5 == 0 && !["Edit", "Report This"].includes($(elem).text())) {this.triviaList.push($(elem).text())}});
      return this.triviaList.pop();
      //return $('.list').children().find('p').first().text();
    },  
    focusInput: function() {
      this.$refs.input.focus();
    },
    scrollToEnd: function() {
      var container = this.$el.querySelector(".chatContent");
      container.scrollTop = container.scrollHeight + 50;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.question {
  align-self: flex-end;
  background-color: rgb(42, 129, 243);
  color: whitesmoke;
}

.answer {
  background-color: gainsboro;
}

.fadein-enter {
  transform: translateY(30px);
}

.fadein-enter-active {
  transition: all 0s;
}

.flexContainer {
  display: flex;
  flex-direction: column;
}
</style>
