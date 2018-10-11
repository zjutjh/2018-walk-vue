/**
 * 获取 cookie
 * @param name
 * @return {*}
 */
export function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}


/**
 * 设置
 * @param name
 * @param value
 * @param expirdays
 */
export function setCookie(c_name, value, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());

}

/**
 * 删除cookie
 * @param name
 */
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();

}