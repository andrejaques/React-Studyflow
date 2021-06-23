// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App Tests', () => {
  test('Check if exist and text in the screen with the value Pokemon Cards', () => {
    render(<App />);
    const title = screen.getByText(/Pokemon Cards/i);
    expect(title).toBeInTheDocument();
  });

  test('Check if exist an input in the screen', () => {
    const { getByTestId } = render(<App />);
    const inputTextPokemon = getByTestId('input-pokemon')
    expect(inputTextPokemon).toBeInTheDocument()
  })

  test('Check if exist a search button in the screen', () => {
    const { getByRole } = render(<App />)
    const searchButton = getByRole('button')
    expect(searchButton).toBeInTheDocument()
  })

  test('Check if the input receive the value wrote in it', () => {
    render(<App />)
    const inputTextPokemon = screen.getByTestId('input-pokemon')
    fireEvent.change(inputTextPokemon, { target: { value: 'Pikachu' } })
    expect(inputTextPokemon).toHaveValue('Pikachu')
  })

  test('Check if the input receive the value wrote in it with userEvent', () => {
    render(<App />)
    const inputTextPokemon = screen.getByTestId('input-pokemon')
    userEvent.type(inputTextPokemon, 'Pikachu')
    expect(inputTextPokemon).toHaveValue('Pikachu')
  })

  test('Simulate the click of a button to research for pokemon', () => {
    const data = {
      cards: [
        {
          id: 'xyp-XY174',
          name: 'Pikachu-EX',
          types: ['Lightning'],
        },
      ],
    };

    global.fetch = jest.fn().mockImplementation(
      function () {
        return Promise.resolve({
          json: () => Promise.resolve(data)
        })
      }
    )

    render(<App />)
    const inputTextPokemon = screen.getByTestId('input-pokemon')
    userEvent.type(inputTextPokemon, 'pikachu')
    const searchButton = screen.getByRole('button')
    fireEvent.click(searchButton)

    expect(global.fetch).toBeCalled()
    expect(global.fetch).toBeCalledTimes(1)
    expect(global.fetch).toBeCalledWith('https://api.pokemontcg.io/v1/cards?name=pikachu')
  })
})