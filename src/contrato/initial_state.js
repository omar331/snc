import {List, Map} from 'immutable';


export function getInitialState() {
    const state =
        Map({
            filters: Map({
                entidade: null,
                startingIn: Map({
                    from: null,
                    to: null
                }),
                endingIn: Map({
                    from: null,
                    to: null
                }),
            }),
            pager: Map(
                {
                    totalItemsCount: 0,
                    itemsPerPage: 20,
                    currentPage: 1,
                    currentPageItems: List(),
                }
            )
        })

    return state
}

