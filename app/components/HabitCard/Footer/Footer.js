//libs
import React from 'react';

//components
import { Container, IconButton } from './Footer.style';

//assets
import EditIcon from '@assets/svg/edit.svg';
import DeleteIcon from '@assets/svg/delete.svg';

const Footer = () => {
  return (
    <Container>
      <IconButton
        appearance="ghost"
        accessoryLeft={() => <EditIcon width={30} height={30} fill="black" />}
      />
      <IconButton
        appearance="ghost"
        accessoryLeft={() => <DeleteIcon width={30} height={30} fill="black" />}
      />
    </Container>
  );
};

export { Footer };
