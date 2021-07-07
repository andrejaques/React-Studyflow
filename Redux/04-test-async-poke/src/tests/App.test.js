import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithReduxAndRouter from './helpers/renderWithReduxAndRouter';

describe('Testes relacionados ao componente App', () => {
  test('Verifia se existe um texto na tela com o valor Pokémon Cards', () => {
    renderWithReduxAndRouter(<App />);
    const title = screen.getByText(/Pokémon Cards/i);
    expect(title).toBeInTheDocument();
  });

  test('Verifica se existe um input de pokemon na tela', () => {
    const { getByTestId } = renderWithReduxAndRouter(<App />);
    const inputTextPokemon = getByTestId('input-pokemon')
    expect(inputTextPokemon).toBeInTheDocument()
  })

  test('Verifica se existe um botão de pesquisar na tela', () => {
    const { getByRole } = renderWithReduxAndRouter(<App />)
    const botaoPesquisar = getByRole('button')
    expect(botaoPesquisar).toBeInTheDocument()
  })

  // test('Verificar se o input recebe o valor pikachu via fireEvent', () => {
  //   render(<App />)
  //   const inputTextPokemon = screen.getByTestId('input-pokemon')
  //   fireEvent.change(inputTextPokemon, { target: { value: 'Pikachu' } })
  //   expect(inputTextPokemon).toHaveValue('Pikachu')
  // })
});