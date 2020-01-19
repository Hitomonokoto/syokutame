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
            return 'GIFT'
        case DIARY:
            return 'DIARY'
        case STAMP:
            return 'STAMP'
        case FARMER:
            return 'FARMER'
        case SIGNIN:
            return 'ログイン'
        case SIGNUP:
            return '新規登録'
        case MYPAGE:
            return 'マイページ'
    }
}