import { BrowserRouter } from 'react-router-dom';

export const RoutesDecorator = () => (Story:any) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
