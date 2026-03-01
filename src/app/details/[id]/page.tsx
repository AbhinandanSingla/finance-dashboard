'use client';
import { Box, List, ListItemButton, Paper, Typography, Divider, Chip } from '@mui/material';
import DashboardChart from "@/app/details/[id]/(components)/DashboardChart";
import React from "react";
import { fetchStackData } from "@/lib/services/stack";

const STACK_ITEMS = ['Stack 1', 'Stack 2', 'Stack 3', 'Stack 4', 'Stack 5'];

export default function DashboardPage() {
    const [selectedId, setSelectedId] = React.useState(STACK_ITEMS[0]);
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    // Fetch data whenever selectedId changes
    React.useEffect(() => {
        setIsLoading(true);
        fetchStackData(selectedId).then((d) => {
            setData(d);
            setIsLoading(false);
        });
    }, [selectedId]);

    return (
        <Box sx={{ display: 'flex', bgcolor: '#0b1120', color: '#f8fafc', minHeight: '100vh' }}>
            {/* Sidebar UI */}
            <Box sx={{ width: 300, borderRight: '1px solid #1e293b', bgcolor: '#0f172a' }}>
                <Typography sx={{ p: 2, fontWeight: 'bold' }}>Sample Stack</Typography>
                <List sx={{ p: 0 }}>
                    {STACK_ITEMS.map((item) => (
                        <ListItemButton
                            key={item}
                            selected={selectedId === item}
                            onClick={() => setSelectedId(item)}
                            sx={{
                                borderBottom: '1px solid #1e293b',
                                '&.Mui-selected': { bgcolor: '#1e293b', borderLeft: '4px solid #3b82f6' }
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <Box sx={{ display: 'flex', gap: 1, mb: 0.5 }}>
                                    <Chip label="↓ F'CAST STAB." size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8' }} />
                                    <Chip label="↑ F'CAST ACC." size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8' }} />
                                </Box>
                                <Typography variant="caption">{item}</Typography>
                            </Box>
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            {/* Content Area */}
            <Box sx={{ flex: 1, p: 4 }}>
                {isLoading ? (
                    <Typography>Loading dashboard...</Typography>
                ) : (
                    <>
                        <Paper sx={{ bgcolor: '#1e293b', p: 3, mb: 3, color: 'white' }}>
                            <Typography variant="h5">{data.name}</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>Stack Id: {data.id}</Typography>
                        </Paper>
                        <Box sx={{ height: 400 }}>
                            <DashboardChart data={data} />
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}