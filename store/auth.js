import firebase from "~/plugins/firebase";
require("firebase/auth");
require('firebase/firestore');
const db = firebase.firestore();

export const state = () => ({
  token: null,
  user_1: null,
  user_2: null,
  user_id: null,
  path: null
})

export const mutations = {
  getToken(state, data) {
    state.token = data;
  },
  getUser_1(state, data) {
    state.user_1 = data;
  },
  getUser_2(state, data) {
    state.user_2 = data;
    state.user_id = data.user_id;
  },
  logout(state) {
    state.token = null;
    state.user_1 = null;
    state.user_2 = null;
    state.user_id = null;
  },
  getPath(state, data) {
    state.path = data;
  }
}

export const actions = {
  // 新規ユーザー登録
  async createUserAction(context, payload) {
    const docRef = await db.collection("users").doc(payload.user_id);
    docRef.set({
      user_id: payload.user_id,
      user_icon: "/samplein.jpg",
      nickname: payload.nickname,
      user_type: 0,
      business_id: null
    });
  },

  // ユーザー情報を取得
  async getUserAction_2(context, payload) {
    const user = await db.collection('users').doc(payload).get();
    console.log(user.data())
    context.commit('getUser_2', user.data());
  },

  // ニックネームを変更
  async changeNicknameAction(context, payload) {
    const docRef = await db.collection("users").doc(payload.user_id);
    docRef.update({
      nickname: payload.new_nickname
    });
    context.dispatch("getUserAction_2", payload.user_id)
  },

  // サインイン
  signInAction(context, signInData) {
    return new Promise(resolve => {
      firebase
        .auth()
        .signInWithEmailAndPassword(signInData.email, signInData.password)
        .then(user => {
          console.log("サインインに成功しました！");
          resolve(user.user.uid);
        })
        .catch(error => {
          console.log("サインインに失敗しました！");
          resolve(error);
        })
    });


  },

  // サインアップ
  signUpAction(context, signUpData) {
    firebase.auth().createUserWithEmailAndPassword(signUpData.email, signUpData.password).then(user => {
      console.log("サインアップに成功しました！");
      console.log(user.user.uid);
    }).catch(error => {
      console.log("サインアップに失敗しました！");
      console.log(error.code);
      console.log(error.message);
    });
  }
}

