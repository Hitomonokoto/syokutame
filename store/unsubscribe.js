import { firestore } from "~/plugins/firebase";

export const state = () => ({
  info_data: ''
})

export const mutations = {
  input(state, data) {
    state.info_data = data;
  }
}

export const actions = {
  async unsubscribeAction(context, data) {
    const docRef = await firestore.collection("unsubscribe").doc();
    const setAda = docRef.set({
      user_id: data.user_id,
      message: data.message
    });
  }
}

