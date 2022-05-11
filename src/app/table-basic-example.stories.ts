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

export const DefaultWithErrors = template.bind({});

export const Better = template.bind({});
Better.args = {
  // Removes error in browser's console, but breaks Control
  dataSource: ELEMENT_DATA,
  // Removes error in browser's console and corrects Control
  displayedColumns: ['position', 'name', 'weight', 'symbol'],
};
