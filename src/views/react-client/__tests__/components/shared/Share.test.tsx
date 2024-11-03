import Share from '@shared/Share';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Share', () => {
  beforeEach(() => {
    render(<Share message='' skeletonStatus={false} />);
  });

  test('should render a share button', () => {
    expect(screen.queryByRole('button')).toBeDefined();
  });

  test('should not show the social media at first instance', () => {
    expect(screen.queryByTestId('social-media')).toBeNull();
  });

  test('should show social media when click event is fired', async () => {
    const btn = await screen.findByTestId('btn-share');
    fireEvent.click(btn);

    expect(screen.queryByTestId('social-media')).not.toBeNull();
  });

  test('should hide social media when clicking twice', async () => {
    const btn = await screen.findByTestId('btn-share');
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(screen.queryByTestId('social-media')).toBeNull();
  });
});
