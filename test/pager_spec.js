import {expect} from 'chai';
import {List, Map} from 'immutable';
import {setItemsPerPage,
        setCurrentPage, getCurrentPage, goToNextPage,
        goToPriorPage, setCurrentPageItems, getCurrentPageItems
}
                    from '../src/core/pager';
import {getInitialState} from '../src/contrato/initial_state';

describe('Pager operations =====> ', () => {

    it('set items per page', () => {
        const SET_ITEMS_PER_PAGE_TO = 32;

        const state = getInitialState()

        const newState = setItemsPerPage(state, SET_ITEMS_PER_PAGE_TO);

        expect(newState.get('pager').get('itemsPerPage'))
                    .to.equal(SET_ITEMS_PER_PAGE_TO);
    })

    it('sets current page', () => {
        const SET_CURRENT_PAGE_TO = 12;

        const state = getInitialState();

        const newState = setCurrentPage(state, SET_CURRENT_PAGE_TO);

        expect(newState.get('pager').get('currentPage'))
                    .to.equal(SET_CURRENT_PAGE_TO);
    })


    it('gets current page', () => {
        const CURRENT_PAGE = 132
        const state = getInitialState()

        const state0 = setCurrentPage(state, CURRENT_PAGE)

        const currentPage = getCurrentPage(state0)

        expect(currentPage)
                .to.equal( CURRENT_PAGE );
    })


    it('goes to next page', () => {
        const CURRENT_PAGE = 27;

        const state = getInitialState();

        const state0 = setCurrentPage(state, CURRENT_PAGE);
        const state1 = goToNextPage(state0);

        expect( state1.get('pager').get('currentPage') )
                .to.equal( CURRENT_PAGE + 1);
    })


    it('goes to prior page', () => {
        const CURRENT_PAGE = 27;

        const state = getInitialState();

        const state0 = setCurrentPage(state, CURRENT_PAGE);
        const state1 = goToPriorPage(state0);

        expect( state1.get('pager').get('currentPage') )
            .to.equal( CURRENT_PAGE - 1);
    })

    it('set current page items', () => {
        const PAGE_ITEMS = List(
            Map({a: 1, b: 2}),
            Map({a: 3, b: 7}),
            Map({a: 5, b: 9})
        )

        const state = getInitialState();

        const state0 = setCurrentPageItems( state, PAGE_ITEMS );

        expect( state0.get('pager').get('currentPageItems') )
            .to.equal( PAGE_ITEMS );
    })



    it('get current page items', () => {

        const PAGE_ITEMS = List(
            Map({a: 1, b: 2}),
            Map({a: 3, b: 7}),
            Map({a: 5, b: 9})
        )

        const state = getInitialState();

        const state0 = setCurrentPageItems( state, PAGE_ITEMS );

        const gotPageItems = getCurrentPageItems( state0 );

        expect( gotPageItems )
            .to.equal( PAGE_ITEMS )
    })
});
