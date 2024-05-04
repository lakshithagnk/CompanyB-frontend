import { Container, CssBaseline, Typography } from "@material-ui/core";
import FileUploadform from "./FileUploadform";
import RecipeReviewCard from "./RecipeReviewCard";


// Define components for different pages
export function DashboardPage() {
    return (
        <>
            <RecipeReviewCard />
        </>
    )
}

export function SimulationsPage() {
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <FileUploadform/>
        </Container>
    );
}

export function ProfilePage() {
    return <Typography variant="h5">Portfolio Page Content Training & Simulation</Typography>;
}

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content Training & Simulation</Typography>;
}