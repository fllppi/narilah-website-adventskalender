import { NotFoundComponent } from '../components/NotFoundComponent';

export function NotFound() {
  document.title = 'Narilah - Not Found';
  return (
    <>
      <NotFoundComponent />
    </>
  );
}
