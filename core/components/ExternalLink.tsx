import { Link } from '@mui/material';
import React from 'react';

type Props = {
  url?: string;
  children?: JSX.Element;
};

const ExternalLink: React.FC<Props> = ({ url, children }) => {
  return (
    <Link href={url} target='_blank' rel='noopener noreferrer'>
      {children}
    </Link>
  );
};

export default ExternalLink;
