import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Calculator from './Calculator';

describe('Testing the App UI', () => {
  test('Testing home UI component', () => {
    const home = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(home).toMatchSnapshot();
  });

  test('Calculator UI component', async () => {
    const calc = render(
      <Router>
        <Calculator />
      </Router>,
    );
    const btn = await screen.findAllByRole('button');
    expect(calc).toMatchSnapshot();
    expect(btn.length).toBe(19);
  });

  test('Quote UI component', () => {
    const quote = render(
      <Router>
        <Quotes />
      </Router>,
    );

    const str = screen.getByText(
      /Mathematics is not about numbers, equations, computations or algorithms, it is about understanding - William Paul Thurston/i,
    );

    expect(quote).toMatchSnapshot();
    expect(str).toBeInTheDocument();
  });
});
