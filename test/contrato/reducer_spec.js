import {expect} from 'chai';
import {List, Map} from 'immutable';
import {getInitialState} from '../../src/contrato/initial_state'

import {
    getCurrentPage, getItemsPerPage,
    setItemsPerPage,
    setCurrentPage, goToNextPage,
    goToPriorPage, setCurrentPageItems
}
    from '../../src/core/pager';

import {reducer} from '../../src/contrato/reducer'

describe('Contrato Reducer ===> ', () => {

    it('PAGER_SET_ITEMS_PER_PAGE', () => {
        const ITEMS_PER_PAGE = 22

        const state0 = getInitialState()

        const action = {type: 'PAGER_SET_ITEMS_PER_PAGE', count: ITEMS_PER_PAGE}

        const state1 = reducer(state0, action)

        const itemsPerPage = getItemsPerPage(state1)

        expect(itemsPerPage).to.equal(ITEMS_PER_PAGE)
    })


    it('PAGER_SET_CURRENT_PAGE', () => {
        const CURRENT_PAGE = 55

        const state = getInitialState()

        const action = {
            type: 'PAGER_SET_CURRENT_PAGE', page: CURRENT_PAGE
        }

        const state1 = reducer(state, action)
        const currentPage = getCurrentPage(state1)

        expect(currentPage).to.equal( CURRENT_PAGE );
    })


    it('PAGER_GO_TO_NEXT_PAGE', () => {
        const CURRENT_PAGE = 55

        const state = getInitialState()
        const state1 = setCurrentPage(state, CURRENT_PAGE);

        const action = {
            type: 'PAGER_GO_TO_NEXT_PAGE'
        }

        const state2 = reducer(state1, action)
        const currentPage = getCurrentPage(state2)

        expect(currentPage).to.equal( CURRENT_PAGE + 1);
    })


    it('PAGER_GO_TO_PRIOR_PAGE', () => {
        const CURRENT_PAGE = 55

        const state = getInitialState()
        const state1 = setCurrentPage(state, CURRENT_PAGE);

        const action = {
            type: 'PAGER_GO_TO_PRIOR_PAGE'
        }

        const state2 = reducer(state1, action)
        const currentPage = getCurrentPage(state2)

        expect(currentPage).to.equal( CURRENT_PAGE - 1);
    })



    it('PAGER_SET_CURRENT_PAGE_ITEMS', () => {
        const PAGE_ITEMS = List(
            Map({a: 1, b: 2}),
            Map({a: 3, b: 7}),
            Map({a: 5, b: 9})
        )

        const state0 = getInitialState();

        const action = {
            type: 'PAGER_SET_CURRENT_PAGE_ITEMS',
            items: PAGE_ITEMS
        }

        const state1 = reducer(state0, action)

        expect( state1.get('pager').get('currentPageItems') )
            .to.equal( PAGE_ITEMS );
    })





});
