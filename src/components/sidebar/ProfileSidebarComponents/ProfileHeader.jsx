import React from 'react';
import Card from '../../../layout/containers/Card';
import Text from '../../Text';
import Button from '../../Button';
import Spacer from '../../Spacer';
import { ArrowDownToLine, CircleX } from 'lucide-react';
import FlexContainer from '../../../layout/containers/FlexContainer';
import ImageCard from '../../../layout/containers/ImageCard';

export default function ProfileHeader({ profileName, profileImage, birthDate, deathDate, statusIcons, onUseAsRoot, onClose, onDownload }) {
  return (
    <FlexContainer gap='12px' backgroundColor="var(--color-background)" padding='0px'>
      <Card positionType='relative' backgroundColor="var(--color-background)" padding="24px" height="100%" >
        <Card onClick={() => {onDownload}} rounded height='24px' width='24px' positionType='absolute' margin='10px 0px 0px 10px' position='top-left' backgroundColor="var(--color-transparent)">
          <ArrowDownToLine color="var(--color-info)" />
        </Card>
        <Card onClick={onClose} rounded height='24px' width='24px' positionType='absolute' margin='10px 10px 0px 0px' position='top-right' backgroundColor="var(--color-transparent)">
          <CircleX color="var(--color-danger)" />
        </Card>


        <ImageCard rounded={true} image={profileImage} size="100px" />

        <Text color='primary-text' variant='heading2'>{profileName}</Text>
        <Text color='tertiary-text' align='center' variant='caption1'>Born on {birthDate} – Died on {deathDate}</Text>
        <Text color='tertiary-text' align='center' variant='caption1'>{statusIcons}</Text>

        <Spacer size='md' />

        <Button variant='primary' onClick={onUseAsRoot} fullWidth={true}  >Use as Root</Button>
      </Card>
    </FlexContainer>
  );
}
