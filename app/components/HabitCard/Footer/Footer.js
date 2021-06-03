//libs
import React from 'react';

//components
import { Container, IconButton } from './Footer.style';

//assets
import EditIcon from '@assets/svg/edit.svg';
import DeleteIcon from '@assets/svg/delete.svg';

const Footer = ({ onDelete, onEdit }) => {
  return (
    <Container>
      <IconButton
        onPress={onEdit}
        appearance="ghost"
        accessoryLeft={() => <EditIcon width={30} height={30} fill="black" />}
      />
      <IconButton
        onPress={onDelete}
        appearance="ghost"
        accessoryLeft={() => <DeleteIcon width={30} height={30} fill="black" />}
      />
    </Container>
  );
};

export { Footer };
