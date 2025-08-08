import React from 'react';
import Card from '../../../layout/containers/Card'
import Text from '../../Text';
import Category from './people/category';
import PeopleCardList from './people/peopleCardList';
import Button from '../../Button';
import Spacer from '../../Spacer';

export default function FamilyConnections({ connections, onAddConnection }) {
  return (
    <Card alignItems='start' margin='0px 0px 0px 0px' padding='0px' backgroundColor="var(--color-background)" >
      <Text variant='heading3'>Family Connections</Text>
      <Spacer size='sm' />

      <Category title="Spouses">
        <PeopleCardList people={connections.spouses} />
      </Category>

      <Category title="Children">
        <PeopleCardList people={connections.children} />
      </Category>

      <Category title="Parents">
        <PeopleCardList people={connections.parents} />
      </Category>

      <Category title="Siblings">
        <PeopleCardList people={connections.siblings} />
      </Category>

      <Card padding='0px' margin='0px 0px 0px 0px' backgroundColor='var(--color-transparent)' alignItems='center' justifyContent='center'>
        <Button fullWidth variant='primary' onClick={onAddConnection} >Add Connection</Button> 
      </Card>
    </Card>
  );
}
