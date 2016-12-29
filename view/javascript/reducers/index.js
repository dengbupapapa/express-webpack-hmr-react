import {
    combineReducers
} from 'redux'

import {
    bannerScroll
} from './page/indexType1'

import {
    retraceSlideTitle
} from './page/retraceSlide/retraceSlide1';


const todoApp = combineReducers({
    bannerScroll,
    retraceSlideTitle
})

export default todoApp