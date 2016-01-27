import {setItemsPerPage,
    setCurrentPage, getCurrentPage, goToNextPage,
    goToPriorPage, setCurrentPageItems, getCurrentPageItems
}
    from '../../src/core/pager';

export function reducer(state = INITIAL_STATE, action = null) {
    switch (action.type) {
        case 'PAGER_SET_CURRENT_PAGE':
            return setCurrentPage(state, action.page);
        case 'PAGER_GO_TO_NEXT_PAGE':
            return goToNextPage(state);
        case 'PAGER_GO_TO_PRIOR_PAGE':
            return goToPriorPage(state);
        case 'PAGER_SET_ITEMS_PER_PAGE':
            return setItemsPerPage(state, action.count);
        case 'PAGER_SET_CURRENT_PAGE_ITEMS':
            return setCurrentPageItems(state, action.items);
    }
    return state;
}

