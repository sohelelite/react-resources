import { FC } from "react";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { Content } from "../../../_metronic/layout/components/content";
import { PageTitle } from "../../../_metronic/layout/core";
import FileUpload from "./FileUpload";

const DashboardPage: FC = () => {
    return (
        <>
            <ToolbarWrapper />
            <Content>
                <FileUpload />
            </Content>
        </>
    )

}

const DashboardWrapper: FC = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
            <DashboardPage />
        </>
    )
}

export { DashboardWrapper }