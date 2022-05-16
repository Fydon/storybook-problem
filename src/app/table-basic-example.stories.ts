import { MatTableModule } from '@angular/material/table';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ELEMENT_DATA, TableBasicExample } from './table-basic-example';

export default {
  title: 'General/TableBasicExample',
  component: TableBasicExample,
  decorators: [
    moduleMetadata({
      declarations: [TableBasicExample],
      imports: [MatTableModule],
    }),
  ],
} as Meta;

const template: Story<TableBasicExample> = (args: TableBasicExample) => ({
  props: {
    ...args,
  },
});

// Errors in browser console
export const DefaultWithErrors = template.bind({});

export const WordAround = template.bind({});
WordAround.args = {
  // Removes error in browser's console, but breaks Control
  dataSource: ELEMENT_DATA,
  // Removes error in browser's console and corrects Control
  displayedColumns: ['position', 'name', 'weight', 'symbol'],
};
// Fixes control
WordAround.argTypes = {
  dataSource: {
    type: {
      name: 'array',
      value: { name: 'string' },
    },
  },
};

// Errors in browser console
export const DisableControl = template.bind({});
DisableControl.argTypes = {
  dataSource: {
    control: { disable: true },
  },
  displayedColumns: {
    control: { disable: true },
  },
};

// Errors in browser console
export const SetArgTypesAsStringArray = template.bind({});
SetArgTypesAsStringArray.argTypes = {
  dataSource: {
    type: {
      name: 'array',
      value: { name: 'string' },
    },
  },
  displayedColumns: {
    type: {
      name: 'array',
      value: { name: 'string' },
    },
  },
};

// Errors in browser console
export const SetArgTypesAsOther = template.bind({});
SetArgTypesAsOther.argTypes = {
  dataSource: {
    type: {
      name: 'other',
      value: 'string array',
    },
  },
  displayedColumns: {
    type: {
      name: 'other',
      value: 'string array',
    },
  },
};
