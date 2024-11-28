import { FC } from "react";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { Content } from "../../../_metronic/layout/components/content";
import { PageTitle } from "../../../_metronic/layout/core";

const DashboardPage: FC = () => {
    return (
        <>
            <ToolbarWrapper />
            <Content>

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