import React from 'react';
import Card from '../../layout/containers/Card';
import Text from '../Text';

import FlexContainer from '../../layout/containers/FlexContainer';

export default function ProfileSidebar({ onClose }) {
  return (
   <FlexContainer>
    {/* head section  */}
    <Card  positionType='relative' backgroundColor="var(--color-background)" padding="24px" height="100%" >
      <Card rounded  height='30px' width='30px'  positionType='absolute' margin='10px 0px 0px 10px' position='top-left' backgroundColor="var(--color-info)"></Card>
      <Card rounded height='30px' width='30px'  positionType='absolute' margin='10px 10px 0px 0px' position='top-right' backgroundColor="var(--color-danger)"></Card>
      <Card rounded height='150px' width='150px'   margin='0px 0px 0px 0px'  backgroundColor="var(--color-primary1)"></Card>
      
      <Text color='primary-text' variant='heading2'>Nadia Kamenie </Text>
      <Text color='tertiary-text' align='center' variant='caption1'>Born on January 15, 1950 – Died on March 22, 2020 </Text>
      <Text color='tertiary-text' align='center' variant='caption1'>  ✍️Admin ⚰️ Deceased</Text>
    </Card>
   </FlexContainer>
  );
}
