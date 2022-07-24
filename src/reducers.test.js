import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialsStateSearch = {
    searchField: ''
  };

  it("should return the initials state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(reducers.searchRobots(initialsStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  });
})

describe('requestRobots', () => {
  const initialsStateRobots = {
    robots: [],
    isPending: false
  }

  it("should return the initials state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialsStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(reducers.requestRobots(initialsStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      robots: [],
      isPending: true
    })
  });
})
