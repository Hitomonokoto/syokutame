import { fireauth } from "~/plugins/firebase"

// ~/plugins/firebase は複数エクスポートしているので、
// 読み込む時は分割代入で読み込まなければならない。

// import fireauth from "~/plugins/firebase"
// このように描いてしまうと ~/plugins/firebase の中身全てを
// fireauth という名前で読み込むことになてしまう。



export default function ({ store }) {
    if (!store.state.auth.uid) {
        fireauth.onAuthStateChanged(async user => {
            if (user) {
                await store.dispatch('auth/getUserAction', user.uid);
            }
        });
    }
}
