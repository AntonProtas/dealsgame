//libs
import React from 'react';

//components
import {
  Container,
  Content,
  EmptyImage,
  Title,
  SubTitle
} from './NoItems.style';

//images
import EmptyImageSrc from '@assets/images/empty.jpg';

const NoItems = ({
  title = 'Empty list!',
  subTitle = 'You have no habits at moment.'
}) => {
  return (
    <Container>
      <Content>
        <EmptyImage resizeMode="cover" source={EmptyImageSrc} />
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </Content>
    </Container>
  );
};

export { NoItems };
