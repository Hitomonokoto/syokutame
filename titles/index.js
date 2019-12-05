import pathToRegexp from 'path-to-regexp'
const TOP = "/";
const GIFT = "/gift";
const DAIRY = "/dairy";
const STAMP = "/stamp";
const FARMERS = "/farmer";
const MYPAGE = "/mypage";
const SIGNIN = "/signin";
const SIGNOUT = "/signout";
const SIGNUP = "/signup";



export const getTitle = (path, { spaceName }) => {
    return TOP === path ? 'ショクタメ' : FARMERS === path ? 'FARMER' : null
}