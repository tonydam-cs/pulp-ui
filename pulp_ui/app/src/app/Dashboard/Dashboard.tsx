import * as React from 'react';
import ReactDOM from "react-dom";
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Dropdown,
  Card,
  CardBody,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
  Divider,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Flex,
  FlexItem,
  Gallery,
  GalleryItem,
  InputGroup,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  Pagination,
  PaginationVariant,
  Progress,
  Select,
  SelectVariant,
  SelectOption,
  SkipToContent,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextInput,
  Title
} from "@patternfly/react-core";
import { Table, TableHeader, TableBody, textCenter } from '@patternfly/react-table';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {ToolbarComponentMangedToggleGroup} from './Toolbar'

import * as PulpCoreClient from '@app/pulpcore-client';
//import { Configuration } from '@app/js-client/configuration';
//import { StatusApi } from '@app/js-client/api';

import BellIcon from "@patternfly/react-icons/dist/js/icons/bell-icon";
import CogIcon from "@patternfly/react-icons/dist/js/icons/cog-icon";
import CubeIcon from "@patternfly/react-icons/dist/js/icons/cube-icon";
import FilterIcon from "@patternfly/react-icons/dist/js/icons/filter-icon";
import SearchIcon from "@patternfly/react-icons/dist/js/icons/search-icon";
import TimesCircleIcon from "@patternfly/react-icons/dist/js/icons/times-circle-icon";
import HistoryIcon from "@patternfly/react-icons/dist/js/icons/history-icon";

//const params = PulpCoreClient.ConfigurationParameters();
const configuration = new PulpCoreClient.Configuration({ username: 'admin', password: 'password', basePath: 'http://localhost:8080' });
const statusAPI = new PulpCoreClient.StatusApi({ configuration: configuration });
const resp = statusAPI.statusRead();

const PageToolbar = new ToolbarComponentMangedToggleGroup(Toolbar)
const PageToolbarContent = PageToolbar.render()

const userDropdownItems = [
  <DropdownItem>Link</DropdownItem>,
  <DropdownItem component="button">Action</DropdownItem>,
  <DropdownItem isDisabled>Disabled link</DropdownItem>,
  <DropdownItem isDisabled component="button">
    Disabled action
  </DropdownItem>,
  <DropdownSeparator />,
  <DropdownItem>Separated link</DropdownItem>,
  <DropdownItem component="button">Separated action</DropdownItem>
];

const PageBreadcrumb = (
  <Breadcrumb>
    <BreadcrumbItem to="#" isActive>
      Dashboard
    </BreadcrumbItem>
  </Breadcrumb>
);


const panelContent = (
  <DrawerPanelContent>
    <DrawerHead>
      <Title headingLevel="h2" size="xl">
        Pulp 3 Web UI
      </Title>
    </DrawerHead>
    <DrawerPanelBody>
      <Flex
        spaceItems={{ default: "spaceItemsLg" }}
        direction={{ default: "column" }}
      >
        <FlexItem>
          <p>
            pulp_href: <a>http://example.com</a>
            <br />
            pulp_created: 2019-08-24T14:15:22Z
            <br />
            versions_href: <a>http://example.com</a>
            <br />
            latest_version_href:<a>http://example.com</a>
            <br />
            remote: <a>http://example.com</a>
          </p>
        </FlexItem>
      </Flex>
    </DrawerPanelBody>
  </DrawerPanelContent>
);

const drawerContent = (
  <React.Fragment>
    {PageToolbarContent}
    <DataList
      aria-label="data list"
      selectedDataListItemId=""
    //onSelectDataListItem={this.onSelectDataListItem}
    >
      <DataListItem aria-labelledby="full-page-item1">
        <DataListItemRow>
          <DataListItemCells
            dataListCells={[
              <DataListCell key="primary content">
                <Flex direction={{ default: "column" }}>
                  <FlexItem>
                    <p>
                      <big>
                        <a href="/ViewRepo" aria-label="Pulp project website">Pulp Website</a>
                      </big>
                    </p>
                    <small>
                      A Red Hat application for managing software
                      repositories <a>https://pulpproject.org/</a>
                    </small>
                  </FlexItem>
                  <Flex>
                    <FlexItem>
                      <HistoryIcon /> Version 3
                    </FlexItem>
                    <FlexItem>
                      <CubeIcon /> 52
                    </FlexItem>
                    <FlexItem>Updated 5 minutes ago</FlexItem>
                  </Flex>
                </Flex>
              </DataListCell>
            ]}
          />
        </DataListItemRow>
      </DataListItem>
      <DataListItem aria-labelledby="full-page-item2">
        <DataListItemRow>
          <DataListItemCells
            dataListCells={[
              <DataListCell key="primary content">
                <Flex direction={{ default: "column" }}>
                  <FlexItem>
                    <p>
                      <big>
                        <a href="/ViewRepo" aria-label="Patternfly-react-element">Patternfly-react-element</a>
                      </big>
                    </p>
                    <small>PatternFly elements</small>
                  </FlexItem>
                  <Flex>
                    <FlexItem>
                      <HistoryIcon /> Version 2
                    </FlexItem>
                    <FlexItem>
                      <CubeIcon /> 203
                    </FlexItem>
                    <FlexItem>Updated 2 days ago</FlexItem>
                  </Flex>
                </Flex>
              </DataListCell>
            ]}
          />
        </DataListItemRow>
      </DataListItem>
    </DataList>
  </React.Fragment>
);

const Dashboard: React.FunctionComponent = () => (
  <Page
    breadcrumb={PageBreadcrumb}
  >
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component="h1">Your Dashboard</Text>
      </TextContent>
      <Divider component="div" />
      <Drawer>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>{drawerContent}</DrawerContentBody>
        </DrawerContent>
      </Drawer>
      <Pagination
        itemCount={100}
        widgetId="pagination-options-menu-bottom"
        variant={PaginationVariant.bottom}
      />
    </PageSection>
  </Page>
)

export { Dashboard };
