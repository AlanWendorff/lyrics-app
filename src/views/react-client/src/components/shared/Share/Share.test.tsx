import Share from './Share';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Share', () => {
  beforeEach(() => {
    render(<Share message='' skeletonStatus={false} />);
  });

  test('should render a share button', () => {
    expect(screen.findByRole('button')).toBeDefined();
  });

  test('should not show the social media at first instance', () => {
    expect(screen.findByTestId('social-media')).toBeNull();
  });

  test('should show social media when click event is fired', () => {
    const btn = screen.getByTestId('btn-share');
    fireEvent.click(btn);

    expect(screen.findByTestId('social-media')).toBeDefined();
  });

  test('should hide social media when clicking twice', () => {
    const btn = screen.getByTestId('btn-share');
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(screen.findByTestId('social-media')).toBeNull();
  });
});
