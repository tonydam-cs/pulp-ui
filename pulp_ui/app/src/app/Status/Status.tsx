import * as React from 'react';
import ReactDOM from "react-dom";
import HistoryIcon from "@patternfly/react-icons/dist/js/icons/history-icon";
import CubeIcon from "@patternfly/react-icons/dist/js/icons/cube-icon";
import { CheckCircleIcon } from '@patternfly/react-icons'
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
    Title,
    CardHeader
} from "@patternfly/react-core";

//import * as PulpCoreClient from '@app/pulpcore-client';
//import { Configuration } from '@app/js-client/configuration';
//import { StatusApi } from '@app/js-client/api';

const Status: React.FunctionComponent = () => (
    <Page>
        <PageSection variant={PageSectionVariants.light}>
            <TextContent>
                <Text>
                    <h1>Pulp 3 Status</h1>
                    <br></br>
                    <Button> Get Status </Button>
                </Text>
                <br></br>
                <Card>
                    <CardTitle>Pulpcore Version:</CardTitle>
                    <CardBody> <HistoryIcon /> 3.11</CardBody>
                    <CardTitle>Known Workers: </CardTitle>
                    <CardBody> Text, Text, Text</CardBody>
                    <CardTitle>Online Content Apps: </CardTitle>
                    <CardBody> Text, Text, Text</CardBody>
                    <CardTitle>Database Connection Status: </CardTitle>
                    <CardBody> CONNECTED <CheckCircleIcon> </CheckCircleIcon></CardBody>
                    <CardTitle>Redis Connection Status: </CardTitle>
                    <CardBody> CONNECTED <CheckCircleIcon> </CheckCircleIcon></CardBody>
                    <CardTitle>Disk Usage: </CardTitle>
                    <CardBody>
                        <CardTitle>Total:</CardTitle>
                        <CardBody>0</CardBody>
                        <CardTitle>Used:</CardTitle>
                        <CardBody>0</CardBody>
                        <CardTitle>Free:</CardTitle>
                        <CardBody>0</CardBody>
                    </CardBody>
                </Card>
            </TextContent>
        </PageSection>
    </Page >
)

export { Status };