import { darkerNeutralColor, darkerSecondColor, negativeColor, lightOrange } from "../constants/colors"

export const arrowUpColor = (uservote) => {
    if(uservote === null) {
        return darkerNeutralColor
    }
    if(uservote === 1) {
        return darkerSecondColor
    }
    if(uservote === -1) {
        return darkerNeutralColor
    }
}

export const arrowDownColor = (uservote) => {
    if(uservote === null) {
        return darkerNeutralColor
    }
    if(uservote === 1) {
        return darkerNeutralColor
    }
    if(uservote === -1) {
        return negativeColor
    }
}

export const arrowUpColorComment = (uservote) => {
    if(uservote === null) {
        return lightOrange
    }
    if(uservote === 1) {
        return darkerSecondColor
    }
    if(uservote === -1) {
        return lightOrange
    }
}

export const arrowDownColorComment = (uservote) => {
    if(uservote === null) {
        return lightOrange
    }
    if(uservote === 1) {
        return lightOrange
    }
    if(uservote === -1) {
        return negativeColor
    }
}