import pathToRegexp from 'path-to-regexp'
const TOP = "/";
const GIFT = "/gift";
const DIARY = "/diary";
const STAMP = "/stamp";
const FARMER = "/farmer";
const MYPAGE = "/mypage";
const SIGNIN = "/signin";
const SIGNOUT = "/signout";
const SIGNUP = "/signup";



export const getTitle = (path, { spaceName }) => {
    return TOP === path
        ? 'ショクタメ' : GIFT === path
            ? 'GIFT' : DIARY === path
                ? 'DIARY' : STAMP === path
                    ? 'STAMP' : FARMER === path
                        ? 'FARMER' : FARMER === path
}