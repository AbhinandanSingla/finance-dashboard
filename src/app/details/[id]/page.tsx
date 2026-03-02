'use client';
import {Box, Paper, Typography} from '@mui/material';

import DashboardChart from "@/app/details/[id]/(components)/DashboardChart";
import React from "react";
import {fetchStackData} from "@/lib/api/stack";
import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";
import {Sidebar} from "@/app/details/[id]/(components)/Sidebar";

const STACK_ITEMS = ['Stack 1', 'Stack 2', 'Stack 3', 'Stack 4', 'Stack 5'];


export default function DashboardPage() {
    const [selectedId, setSelectedId] = React.useState(STACK_ITEMS[0]);
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const router = useRouter();
    // Fetch data whenever selectedId changes
    React.useEffect(() => {
        setIsLoading(true);
        fetchStackData(selectedId).then((d) => {
            setData(d);
            setIsLoading(false);
        });
    }, [selectedId]);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{display: 'flex', bgcolor: '#0b1120', color: '#f8fafc', minHeight: '100vh'}}>
            {/* Sidebar UI */}
            <Box sx={{width: 380, borderRight: '1px solid #1e293b', bgcolor: '#0f172a'}}>
                <ArrowLeft style={{
                    margin: '16px',
                    cursor: 'pointer',
                    color: '#94a3b8',
                    transition: 'color 0.2s',
                }} onClick={() => {
                    router.back()
                }}/>
                <Typography sx={{p: 2, fontWeight: 'bold'}}>Sample Stack</Typography>
                <Sidebar selectedId={selectedId} setSelectedId={setSelectedId} stackItems={STACK_ITEMS}/>
            </Box>
            <Box sx={{flex: 1, p: 4}}>
                {isLoading ? (
                    <Typography>Loading dashboard...</Typography>
                ) : (
                    <>
                        <Paper sx={{bgcolor: '#1e293b', p: 3, mb: 3, color: 'white'}}>
                            <Typography variant="h5">{data.name}</Typography>
                            <Typography variant="body2" sx={{opacity: 0.7}}>Stack Id: {data.id}</Typography>
                        </Paper>
                        <Box sx={{height: 400}}>
                            <DashboardChart data={data}/>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}