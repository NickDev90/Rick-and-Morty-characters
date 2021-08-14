import { render, screen } from '@testing-library/react';
import CharacterList from './CharactersList.js';

const data = [{'name': 'John', 'status': 'alive', 'gender':'male', 'location': {'name': 'Earth'}}]
const emptyData = [];



describe('CharacterList component', ()=> {

    it('renders list of characters', () => {
      render(<CharacterList characters={data} key={data.index}/>);
      expect(screen.getByText('Earth')).toBeInTheDocument();
    });


    it('List snapshot', () => {
      const list = render(<CharacterList characters={data} key={data.index}/>);
      expect(list).toMatchSnapshot();
    });

    it('Empty list snapshot', () => {
      const list = render(<CharacterList characters={emptyData}/>);
      expect(list).toMatchSnapshot();
    });

  }
)

