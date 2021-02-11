global.fetch = require('node-fetch');  // eslint-disable-line 
import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import NewsSearch from './NewsSearch';
import mockApiCall from '../../fixtures/mockApiCall.json';

const server = setupServer(
  rest.get('https://newsapi.org/v2/', (req, res, ctx) => {
    return res(ctx.json(mockApiCall.json));
  })
);

describe('NewsSearch container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('searches for articles when a search term is typed', () => {
    render(<NewsSearch />);

    const searchInput = screen.getByPlaceholderText('search here');

    fireEvent.input(searchInput, {
      target: {
        value: 'test',
      },
    });

    // user.type(searchInput, 'test');

    return waitFor(() => {
      expect(screen.getByTestId('articles')).not.toBeEmptyDOMElement();
    });
  });
});
