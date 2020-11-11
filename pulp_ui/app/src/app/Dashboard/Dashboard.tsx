import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody, textCenter } from '@patternfly/react-table';
import styles from '@patternfly/react-styles/css/components/Table/table';

import * as PulpCoreClient from '@app/pulpcore-client';
//import { Configuration } from '@app/js-client/configuration';
//import { StatusApi } from '@app/js-client/api';

//const params = PulpCoreClient.ConfigurationParameters();
const configuration = new PulpCoreClient.Configuration({username: 'pulp', password: 'password', basePath: 'http://localhost'});
const statusAPI = new PulpCoreClient.StatusApi({configuration: configuration});
const resp = statusAPI.statusRead();

    const state = {
      columns: [
        { 
          title: 'Repositories',
          header: {
            info: {
              tooltip: 'More information about repositories',
              className: 'repositories-info-tip',
              tooltipProps: {
                isContentLeftAligned: true
              }
            }
          }
        },
        'Branches',
        { 
          title: 'Pull requests',
          header: {
            info: {
              popover: <div>More <strong>information</strong> on pull requests</div>,
              ariaLabel: 'More information on pull requests',
              popoverProps: {
                headerContent: 'Pull requests',
                footerContent: <a href="">Click here for even more info</a>
              }
            }
          }
        },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
        {
          cells: [
            {
              title: <div>one - 2</div>,
              props: { title: 'hover title', colSpan: 3 }
            },
            'four - 2',
            'five - 2'
          ]
        },
        {
          cells: [
            'one - 3',
            'two - 3',
            'three - 3',
            'four - 3',
            {
              title: 'five - 3 (not centered)',
              props: { textCenter: false }
            }
          ]
        }
      ]
    };

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Titles</Title>
      <Table aria-label="Simple Table" cells={state.columns} rows={state.rows}>
        <TableHeader className={styles.modifiers.nowrap}/>
        <TableBody />
      </Table>
  </PageSection>
)

export { Dashboard };
