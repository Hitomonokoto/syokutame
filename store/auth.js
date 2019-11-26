import firebase from "~/plugins/firebase";
require("firebase/auth");
require('firebase/firestore');
const db = firebase.firestore();

export const state = () => ({
  uid: null,
  user: null
})

export const mutations = {
  getUid(state, data) {
    state.uid = data;
  },
  getUser(state, data) {
    state.user = data;
  }
}

export const actions = {

  // サインイン
  signInAction(context, signInData) {
    return new Promise(resolve => {
      firebase
        .auth()
        .signInWithEmailAndPassword(signInData.email, signInData.password)
        .then(user => {
          context.dispatch("getUserAction", user.user.uid)
            .then(() => {
              console.log("サインインに成功しました！");
              this.$router.push("/");
            })
        })
        .catch(error => {
          console.log(error.message);
          resolve(false);
        })
    });
  },

  // サインアップ
  signUpAction(context, signUpData) {
    return new Promise(resolve => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
        .then(user => {
          context.dispatch("createUserDataAction", {
            uid: user.user.uid,
            nickname: signUpData.nickname
          })
            .then(() => {
              console.log("サインアップに成功しました！");
            })
        })
        .catch(error => {
          console.log("サインインに失敗しました！");
          console.log(error.message);
          resolve(error);
        });
    });
  },

  // ユーザーデータをデータベースに登録
  createUserDataAction(context, userData) {
    const docRef = db.collection("users").doc(userData.uid);
    docRef.set({
      nickname: userData.nickname,
      user_icon: "/samplein.jpg",
      cmn: 0,
      contentful_id: null
    });
    context.commit("getUid", {
      uid: userData.uid
    });
    context.commit("getuser", {
      nickname: userData.nickname,
      user_icon: "/samplein.jpg",
      cmn: 0,
      contentful_id: null
    });
    this.$router.push("/");
  },

  // ユーザー情報を取得
  async getUserAction(context, uid) {
    const user = await db.collection('users').doc(uid).get();
    context.commit("getUid", uid);
    context.commit('getUser', user.data());
  },

  // ニックネームを変更
  async changeNicknameAction(context, payload) {
    const docRef = await db.collection("users").doc(payload.user_id);
    docRef.update({
      nickname: payload.new_nickname
    });
    context.dispatch("getUserAction_2", payload.user_id)
  }

}

