import { firestore, fireauth } from "~/plugins/firebase";

export const state = () => ({
  uid: "",
  user: {}
});

export const getters = {
  Uid: state => state.uid,
  User: state => state.user
};

export const mutations = {
  getUid(state, data) {
    state.uid = data;
  },
  getUser(state, data) {
    state.user = data;
  },
  signOut(state) {
    state.uid = "";
    state.user = {};
  }
};

export const actions = {

  // サインイン
  signInAction(context, signInData) {
    return new Promise(resolve => {
      fireauth
        .signInWithEmailAndPassword(signInData.email, signInData.password)
        .then(user => {
          context.dispatch("getUserAction", user.user.uid)
          this.$router.push("/");
          console.log("サインインに成功しました！");
        })
        .catch(error => {
          console.log("サインインに失敗しました！");
          resolve(false);
        })
    });
  },

  // サインアップ
  signUpAction(context, { nickname, email, password }) {
    return new Promise(resolve => {
      fireauth
        .createUserWithEmailAndPassword(email, password)
        .then(async user => {
          await context.dispatch("createUserDataAction", {
            uid: user.user.uid,
            nickname: nickname
          })
          console.log("サインアップに成功しました！");
          this.$router.push("/");
        })
        .catch(error => {
          console.log("サインアップに失敗しました！");
          resolve(error);
        });
    });
  },

  // ユーザーデータをデータベースに登録
  async createUserDataAction(context, { uid, nickname }) {
    const docRef = firestore.collection("users").doc(uid);
    docRef.set({
      nickname,
      user_icon: "/samplein.jpg",
      cmn: 0,
      contentful_id: null
    });
    context.commit("getUid", uid);
    context.commit("getUser", {
      nickname,
      user_icon: "/samplein.jpg",
      cmn: 0,
      contentful_id: null
    });
  },

  // ユーザー情報を取得
  async getUserAction(context, uid) {
    const user = await firestore.collection('users').doc(uid).get();
    context.commit("getUid", uid);
    context.commit('getUser', user.data());
  },

  // ニックネームを変更
  async changeNicknameAction(context, payload) {
    const docRef = await firestore.collection("users").doc(payload.user_id);
    docRef.update({
      nickname: payload.new_nickname
    });
    context.dispatch("getUserAction_2", payload.user_id)
  }
};

