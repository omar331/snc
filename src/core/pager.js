import {Map,List} from 'immutable';

/**
 * Pager - set items per page
 * @param state
 * @param count
 * @returns {List<T>|Map<K, V>|Map<string, V>|Set<T>|Cursor|*}
 */
export function setItemsPerPage(state, count) {
    return state.merge({
        pager: state.get('pager').merge({itemsPerPage: count})
    });
}


/**
 * Pager - set current page
 * @param state
 * @param page
 * @returns {List<T>|Map<K, V>|Map<string, V>|Set<T>|Cursor|*}
 */
export function setCurrentPage(state, page) {
    return state.merge({
       pager: state.get('pager').merge({currentPage: page})
    });
}


/**
 * Gets the current page
 * @param state
 * @returns {Number}
 */
export function getCurrentPage(state) {
    return state.get('pager').get('currentPage');
}


/**
 * Goes to next page
 * @param state
 * @returns {List.<T>|Map.<K, V>|Map.<string, V>|Set.<T>|Cursor|*}
 */
export function goToNextPage(state) {
    return setCurrentPage(state, getCurrentPage(state) + 1);
}


/**
 * Goes to prior page
 * @param state
 * @returns {List.<T>|Map.<K, V>|Map.<string, V>|Set.<T>|Cursor|*}
 */
export function goToPriorPage(state) {
    return setCurrentPage(state, getCurrentPage(state) - 1);
}


/**
 * Set current page items
 * @param state
 * @param items
 * @returns {List<T>|Map<K, V>|Map<string, V>|Set<T>|Cursor|*}
 */
export function setCurrentPageItems(state, items) {
    return state.merge({
        pager: state.get('pager').merge({currentPageItems: items})
    });
}

/**
 * Get current page items
 * @param state
 * @returns {*}
 */
export function getCurrentPageItems(state) {
    return state.get('pager').get('currentPageItems');
}

