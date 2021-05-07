<template>
  <div class="home">
    <div class="wrapbox">{{ globalMessage }}</div>
    <button @click="increment">increment</button>
    <button @click="resetMessage">resetMessage</button>
    <button @click="changeImgUrl">changeImgUrl</button>
    <div>{{ imgData }}</div>
    <div>{{ imgData.aaa }}</div>

    <hr />
    <div>{{ number }}</div>
    <button @click="ComponentIncrement">ComponentIncrement</button>
    <button @click="ComponentDcrement">ComponentDcrement</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  setup() {
    const number = ref(0);
    const ComponentIncrement = () => {
      number.value++;
    };

    const ComponentDcrement = () => {
      number.value--;
    };
    onMounted(() => {
      console.log("这是component api   onMounted");
    });
    return {
      number,
      ComponentIncrement,
      ComponentDcrement,
    };
  },
  data() {
    return {
      imgData: "",
    };
  },
  computed: {
    ...mapState(["globalMessage"]),
  },
  methods: {
    ...mapActions(["increment", "resetMessage"]),
    changeImgUrl() {
      setTimeout(() => {
        axios.get("./aaa.json").then((res) => {
          console.log("res", res.data);
          this.imgData = res.data;
        });
      }, 2000);
    },
  },
  mounted() {
    this.mixinMethods();
  },
};
</script>
<style scoped>
.wrapbox {
  border: 1px solid red;
  width: 300px;
  height: 300px;
}
</style>