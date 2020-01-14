import Cookies from "universal-cookie";

export default async ({ req, store, route, redirect }) => {
    const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
    const token = await cookies.get("token");
    const lastPath = await cookies.get("lastPath");

    if (token && !store.state.auth.uid) {
        console.log("cookieからtokenを取得しました。");
        await store.dispatch('auth/getUserAction', token);
        if (lastPath == '/user') {
            redirect("/");
        }
    }
    cookies.set("lastPath", route.path);
};