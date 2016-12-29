import {
    SET_BANNER_ACTIVE
} from 'sActions/page/indexType1'

export const bannerScroll = (index = 0, action) => {
    switch (action.type) {
        case SET_BANNER_ACTIVE:
            return action.index;
        default:
            return index;
    }
}