import { render, screen } from '@testing-library/react';
import Character from './Character.js';

const testItem = {'name': 'John', 'status': 'alive', 'gender':'male', 'location': {'name': 'Earth'}}


describe('Character component', ()=> {

    it("renders character's data", () => {
      render(<Character hero={testItem}/>);
      expect(screen.getByText('John')).toBeInTheDocument();
    });

  }
)

