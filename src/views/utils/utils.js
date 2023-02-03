/**
 * 数字格式化处理
 */
export function num(val){
    if (val) return '';
    return val.toLocaleString();
}

/**
 * 处理数据中的html标签
 */
export function replaceHTMLTag(htmlStr){
    let html = htmlStr
    .replace(/<img.*?>/g , '[图片]')
    .replaceAll(/<[^>]+>/g , '')
    .replace(/&nbsp;/gi,'');
    return html;
}