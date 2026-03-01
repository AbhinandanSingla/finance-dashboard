"use client";
import {Box, Stack, Typography} from "@mui/material";

import {CircleAlert} from "lucide-react"
import dynamic from "next/dynamic";
import CityCard from "@/components/city-widget/CityWidget";
import {CityData} from "@/types";

const mockData: CityData[] = [
    {
        id: '7b4ee671-dad3-4345-be03-c16673cd2273',
        name: 'City 1',
        metric1: '45.7M',
        metric2: '65%',
        chartData: [10, 30, 20, 50, 40]
    },
    {
        id: '997438ab-b78a-4c00-a574-416570000dff',
        name: 'City 2',
        metric1: '79.2T',
        metric2: '62%',
        chartData: [40, 20, 50, 10, 30]
    },
    {
        id: '00c06638-3d6c-40c0-837f-07a36492906a',
        name: 'City 2',
        metric1: '79.2T',
        metric2: '62%',
        chartData: [40, 20, 50, 10, 30]
    },
    {
        id: '35ac0eb1-d074-4d24-b802-02e62b1450c6',
        name: 'City 2',
        metric1: '79.2T',
        metric2: '62%',
        chartData: [40, 20, 50, 10, 30]
    },
    {
        id: '4c11c906-4a92-4437-884b-e63ea3665c58',
        name: 'City 2',
        metric1: '79.2T',
        metric2: '62%',
        chartData: [40, 20, 50, 10, 30]
    },
    {
        id: 'e89547a4-b21f-496e-acb6-74d8543365f9',
        name: 'City 2',
        metric1: '79.2T',
        metric2: '62%',
        chartData: [40, 20, 50, 10, 30]
    },
    {
        id: '034a592e-1cfe-4465-a334-37bf5d91d9cf',
        name: 'City 2',
        metric1: '79.2T',
        metric2: '62%',
        chartData: [40, 20, 50, 10, 30]
    }
];
// This is the key fix
const Map = dynamic(() => import("@/components/map-layout/MapSection"), {
    ssr: false,
});
const mockCities = [
    {id: 1, name: "City 1", metric: "45.7M", coords: [40.712, -74.006]},
    {id: 2, name: "City 2", metric: "79.2T", coords: [4.609, -74.081]},
    {id: 3, name: "City 3", metric: "567.5M", coords: [35.676, 139.650]},
];
export default function Dashboard() {
    return (
        <Box sx={{width: "100vw", height: "100vh", position: "relative", bgcolor: "#050f1a", color: "#fff"}}>
            <Box sx={{
                position: "relative",
                zIndex: 1,
            }}>
                <Stack direction={'row'}
                       sx={{
                           display: "flex",
                           padding: "2rem",
                           gap: "2rem",
                       }}
                >
                    <Typography sx={{
                        fontSize: "1.5rem",
                    }}>
                        Hello User
                    </Typography>
                    <Box sx={{
                        display: "inline-flex",
                        background: "rgb(0,197,255)",
                        borderRadius: "8px",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        alignItems: "center",

                    }}>
                        <CircleAlert/>
                        <Typography>
                            There are 2 to action items.
                        </Typography>
                    </Box>
                </Stack>
                {/* Widget Container with Scroll Handling */}
                <Box sx={{
                    position: "relative",
                    zIndex: 1,
                    pt: 4,
                    px: 4,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    overflowX: "auto",
                    "&::-webkit-scrollbar": {height: "8px"},
                    "&::-webkit-scrollbar-thumb": {bgcolor: "#1a73e8", borderRadius: "4px"}
                }}>

                    {mockData.map((city) => <CityCard key={city.id} city={city}/>)}
                </Box>
            </Box>

        </Box>
    );
}