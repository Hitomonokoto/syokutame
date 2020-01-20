import pathToRegexp from 'path-to-regexp'
const TOP = "/";
const GIFT = "/gifts";
const DIARY = "/diary";
const STAMP = "/stamp";
const FARMER = "/farmers";
const MYPAGE = "/user";
const SIGNIN = "/signIn";
const SIGNUP = "/signUp";



export const getTitle = (path, { spaceName }) => {
    switch (path) {
        case TOP:
            return 'ショクタメ'
        case GIFT:
            return 'ギフト'
        case DIARY:
            return 'ダイアリー'
        case STAMP:
            return 'スタンプ'
        case FARMER:
            return '生産者'
        case SIGNIN:
            return 'ログイン'
        case SIGNUP:
            return 'アカウント登録'
        case MYPAGE:
            return 'マイページ'
    }
}