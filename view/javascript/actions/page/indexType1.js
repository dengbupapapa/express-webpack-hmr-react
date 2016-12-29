/*
 * action 类型
 */

export const SET_BANNER_ACTIVE = Symbol('SET_BANNER_ACTIVE');

/*
 * action 创建函数
 */
export const setBannerActive = index => ({
    type: SET_BANNER_ACTIVE,
    index
});