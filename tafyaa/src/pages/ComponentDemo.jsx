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
import ToggleSwitch from '../components/ToggleSwitch';
import Row from '../layout/containers/Row';
import Column from '../layout/containers/Column';
import Container from '../layout/containers/FlexContainer';
import Grid from '../layout/containers/Grid';
import Card from '../layout/containers/Card';
import FlexContainer from '../layout/containers/FlexContainer';

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
      <Row gap="2rem" padding="1rem">
        <div style={{ background: '#eee', padding: 8 }}>Child 1</div>
        <div style={{ background: '#eee', padding: 8 }}>Child 2</div>
      </Row>
      <Divider />

      <h2>Column</h2>
      <Column gap="1rem" padding="1rem">
        <div style={{ background: '#eee', padding: 8 }}>Item 1</div>
        <div style={{ background: '#eee', padding: 8 }}>Item 2</div>
      </Column>
      <Divider />

      <h2>Flexible Container</h2>
      <FlexContainer direction="row" gap="24px" padding="24px">
        <div style={{ background: '#eee', padding: 8 }}>Left</div>
        <div style={{ background: '#eee', padding: 8 }}>Right</div>
      </FlexContainer>
      <Divider />

      <h2>Grid</h2>
      <Grid columns={2} gap="10px">
        <div style={{ background: '#eee', padding: 8 }}>Cell 1</div>
        <div style={{ background: '#eee', padding: 8 }}>Cell 2</div>
        <div style={{ background: '#eee', padding: 8 }}>Cell 3</div>
      </Grid>
      <Divider />

      <h2>Card</h2>
      <Card padding="24px" shadow borderRadius="12px">
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
      </Card>
    </div>
  );
};

export default ComponentDemo;