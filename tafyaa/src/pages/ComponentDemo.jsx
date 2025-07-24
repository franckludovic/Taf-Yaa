import React, { useState } from 'react';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import DateInput from '../components/DateInput';
import Divider from '../components/Divider';
import FileUpload from '../components/FileUpload';
import Slider from '../components/Slider';
import { TextInput, SearchInput, TextArea } from '../components/Input';
import SelectDropdown from '../components/SelectDropdown';
import Spacer from '../components/Spacer';
import StepperInput from '../components/StepperInput';
import Text from '../components/Text';
import ToggleSwitch from '../components/ToggleSwitch';
import Row from '../layout/containers/Row';
import Column from '../layout/containers/Column';
import Grid from '../layout/containers/Grid';
import Card from '../layout/containers/Card';
import FlexContainer from '../layout/containers/FlexContainer';
import { CircleUser } from 'lucide-react';


const ComponentDemo = () => {
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState('');
  const [step, setStep] = useState(1);
  const [dropdown, setDropdown] = useState('');
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [textarea, setTextarea] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div style={{ padding: 32 }}>
      <h1>Components Demo</h1>
      <Divider />

      <h2>Texts</h2>
      <Text variant="heading1" bold color="primary-text" align="center">
        Welcome to the Portal
      </Text>

      <Text variant="caption2" italic color="danger">
        * This is a warning
      </Text>

      <Text as="p" color="gray-dark">
        This is a paragraph rendered as a paragraph element.
      </Text>

      <Divider />

      <h2>Button</h2>
      <Button onClick={() => alert('Clicked!')}>Primary Button</Button>
      <Spacer />
      <Button variant="secondary">Secondary</Button>
      <Spacer />
      <Button loading>Loading</Button>
      <Spacer />
      <Button disabled>Disabled</Button>
      <Spacer />
      <Button size='sm'>Small button</Button>
      <Spacer />
      <Button size='md'>Medium button</Button>
      <Spacer />
      <Button size='lg'>Large button</Button>
      <Spacer />
      <Button variant='link'>Learn more</Button>
      <Spacer />
      <Button fullWidth>Full Width</Button>
      <Divider />

      <h2>Checkbox</h2>
      <Checkbox label="Accept Terms" checked={checked} onChange={() => setChecked(!checked)} />
      <Divider />

      <h2>DateInput</h2>
      <DateInput label="Pick a date" value={date} onChange={e => setDate(e.target.value)} />
      <Divider />

      <h2>Divider</h2>
      <Divider />
      <Divider color="red" thickness="2px" borderRadius='2px' />
      <Divider vertical style={{ height: 40 }} />
      <Divider />

      <h2>FileUpload</h2>
      <FileUpload onChange={() => {}} />
      <Divider />

      <h2>Input</h2>
      <TextInput label="Name" value={text} onChange={e => setText(e.target.value)} placeholder="Enter name" />
      <Spacer />
      <SearchInput
        placeholder="Search for a Tree..."
        value={search}
        onChange={setSearch}
        onSearch={val => alert('Searching for:'+' '+ val)}
      />
      <Spacer />
      <TextArea label="Description" value={textarea} onChange={e => setTextarea(e.target.value)} />
      <Divider />

      <h2>Slider</h2>
      <Slider
        label="Volume"
        min={0}
        max={100}
        step={2}
        value={sliderValue}
        onChange={setSliderValue}
      />
      <Divider />

      <h2>SelectDropdown</h2>
      <SelectDropdown
        label="Choose"
        options={[{ label: 'One', value: 1 }, { label: 'Two', value: 2 }]}
        value={dropdown}
        onChange={e => setDropdown(e.target.value)}
      />
      <Divider />

      <h2>Spacer</h2>
      <Spacer size="md" />
      <Spacer size="28px" />
      <Spacer size="lg" vertical={false} />
      <Divider />

      <h2>StepperInput</h2>
      <StepperInput value={step} onChange={setStep} />
      <Divider />

      <h2>ToggleSwitch</h2>
        <ToggleSwitch
          checked={toggle}
          onChange={newValue => {
            setToggle(newValue);
            setTimeout(() => {
              alert(newValue ? "this is On" : "this is Off");
            }, 0);
          }}
        /> 
      <Divider />

      <h2>Row</h2>
      <Row gap="1rem" padding="1rem" justifyContent='space-between'  >
        <Card backgroundColor='#7c0786' height='50px' width='150px'>Card 2</Card>
        <Card backgroundColor='#7c0786' height='50px' width='150px'>Card 2</Card>
      </Row>
      <Divider />

      <h2>Column</h2>
      <FlexContainer direction="column" height='400px'>
        <Column gap="1rem" padding="1rem" justifyContent='space-between' height='100%'>
          <Card backgroundColor='#1F724A' height='50px'> Card 1 </Card>
          <Card backgroundColor='#1F724A' height='50px'> Card 2 </Card>
        </Column>
      </FlexContainer>
      <Divider />

      <h2>Flexible Container</h2>
       <FlexContainer direction="column" responsiveDirection="row" gap="1rem">
        <Card backgroundColor='#1F724A' height='50px'> Card 1 </Card>
        <Card backgroundColor='#1F724A' height='50px'> Card 2 </Card>
       </FlexContainer>
      <Divider />

      <h2>Grid</h2>
      <Grid columns={2} gap="10px">
        <Card backgroundColor='#1F724A' height='50px' borderRadius='5px'> Card 1 </Card>
        <Card backgroundColor='#1F724A' height='50px'> Card 2 </Card>
        <Card backgroundColor='#1F724A' height='50px'> Card 3 </Card>
      </Grid>
      <Divider />

      <h2>Card</h2>
      <Card padding="24px" shadow borderRadius="12px" backgroundColor='black' positionType='Relative'>
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
        <Card rounded positionType='Absolute' position='top-right' backgroundColor='white' onClick={() => {}} margin='5px 5px 0px 0px' ><CircleUser strokeWidth={2} size={50} color='#1F724A'/></Card>
        <Card width='100px'  positionType='Absolute' position='bottom-right' onClick={() => {}} margin='0px 10px 10px 0px' ><Text variant='caption1' color='body'> others</Text></Card>
        <Card width='100px' positionType='Absolute' position='bottom-left' onClick={() => {}} margin='0px 0px 10px 10px' >others</Card>
      </Card>
    </div>
  );
};

export default ComponentDemo;