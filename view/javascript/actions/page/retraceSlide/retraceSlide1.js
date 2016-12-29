/*
 * action 类型
 */

export const GET_RE_TRACE_SLIDE_TITLE = Symbol('GET_RE_TRACE_SLIDE_TITLE');

/*
 * action 创建函数
 */
export const setRetraceSlideTitle = title => ({
    type: GET_RE_TRACE_SLIDE_TITLE,
    title
});