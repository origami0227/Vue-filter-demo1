
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;
let id = 0;
const createUser = (name, gender) => {
  id += 1;
  return { id: id, name: name, gender: gender };
};
new Vue({
  data() {
    return {
      users: [
        createUser("方方", "男"),
        createUser("圆圆", "女"),
        createUser("小新", "男"),
        createUser("小葵", "女")
      ],
      displayUsers: []
    };
  },
  created() {
    this.displayUsers = this.users;
  },
  methods: {
    showMale() {
      this.displayUsers = this.users.filter(u => u.gender === "男");
    },
    showFemale() {
      this.displayUsers = this.users.filter(u => u.gender === "女");
    },
    showAll() {
      this.displayUsers = this.users;
    }
  },

  template: `
    <div>
      <div>
      <button @click="showAll">全部</button>
      <button @click="showMale">男</button>
      <button @click="showFemale">女</button></div>
      <ul>
        <li v-for="(u,index) in displayUsers" :key="index">{{u.name}} - {{u.gender}}</li>
      </ul>
      
    </div>
  `
}).$mount("#app");
