import { FC, useState } from 'react';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import shareIcon from '@images/shared/share-icon.png';
import styles from './Share.module.scss';

interface IShareProps {
  message: string;
}

const Share: FC<IShareProps> = ({ message }) => {
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button aria-label='Open share options' className={styles.button} onClick={() => setIsSocialOpen(!isSocialOpen)}>
        <img src={shareIcon} alt='share icon' />
        Share
      </button>

      {isSocialOpen && (
        <div className={styles.social}>
          <FacebookShareButton url={window.location.pathname} hashtag='#music' title={message}>
            <FacebookIcon size={30} round={true} />
          </FacebookShareButton>

          <TwitterShareButton url={window.location.href} hashtags={['music']} title={message}>
            <TwitterIcon size={30} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton url={`${message} •  ${window.location.pathname}`}>
            <WhatsappIcon size={30} round={true} />
          </WhatsappShareButton>
        </div>
      )}
    </div>
  );
};

export default Share;
