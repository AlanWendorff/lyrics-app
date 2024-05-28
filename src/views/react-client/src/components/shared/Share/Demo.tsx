import { FC, useState } from 'react';

interface IShareProps {
  message: string;
}

const Share: FC<IShareProps> = ({ message }) => {
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsSocialOpen(!isSocialOpen)} aria-label='Open share options' data-testid='btn-share'>
        Share
      </button>

      {/* {isSocialOpen && <div data-testid='social-media'>asd</div>} */}
    </div>
  );
};

export default Share;
