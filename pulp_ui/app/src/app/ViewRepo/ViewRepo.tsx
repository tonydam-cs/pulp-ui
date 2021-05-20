import * as React from 'react';
import ReactDOM from "react-dom";
import HistoryIcon from "@patternfly/react-icons/dist/js/icons/history-icon";
import CubeIcon from "@patternfly/react-icons/dist/js/icons/cube-icon";
import {
    Avatar,
    Brand,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonVariant,
    Dropdown,
    Card,
    CardTitle,
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
    List,
    ListItem,
    Nav,
    NavItem,
    NavList,
    Page,
    PageHeader,
    PageSection,
    PageSectionVariants,
    PageSidebar,
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

//import * as PulpCoreClient from '@app/pulpcore-client';
//import { Configuration } from '@app/js-client/configuration';
//import { StatusApi } from '@app/js-client/api';
const PageBreadcrumb = (
    <Breadcrumb>
        <BreadcrumbItem>Section home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
            Section landing
      </BreadcrumbItem>
    </Breadcrumb>
);

const ViewRepo: React.FunctionComponent = () => (
    <Page>
        <PageSection variant={PageSectionVariants.light}>
            {PageBreadcrumb}
            <br></br> <br></br>
            <TextContent>
                <Text>
                    <h1>View Repository</h1>
                </Text>
                <Button> Sync </Button>
                <br></br> <br></br>
                <Card>
                    <CardTitle>Repository Name</CardTitle>
                    <CardBody>
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod.
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>Latest Version</CardTitle>
                    <CardBody>
                        <HistoryIcon /> Version 3 <br></br>
                            Last Synced: 00/00/0000 00:00AM
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>Remote URL</CardTitle>
                    <CardBody>
                        http://example.com
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>Distribution URL</CardTitle>
                    <CardBody>
                        http://example.com
                    </CardBody>
                </Card>
                <br></br>
                <Card>
                    <CardTitle> Repository Version: &nbsp; &nbsp; <Button variant="control"> <HistoryIcon /> Version 2 <br></br></Button></CardTitle>
                    <CardBody>
                        <HistoryIcon /> Version 2: &nbsp; Created: 00/00/0000 00:00AM
                    </CardBody>
                    <Card>
                        <CardTitle>Current Files &nbsp; <CubeIcon /> 7</CardTitle>
                        <CardBody>
                            <List>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                            </List>
                        </CardBody>

                    </Card>
                    <Card>
                        <CardTitle>Added &nbsp; <CubeIcon /> 3</CardTitle>
                        <CardBody>
                            <List>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                            </List>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle>Removed &nbsp; <CubeIcon /> 2</CardTitle>
                        <CardBody>
                            <List>
                                <ListItem>File Content</ListItem>
                                <ListItem>File Content</ListItem>
                            </List>
                        </CardBody>
                        <br></br>
                    </Card>
                </Card>
            </TextContent>
        </PageSection>
    </Page >
)

export { ViewRepo };