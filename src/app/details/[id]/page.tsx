'use client';
import {
    Box,
    FormControlLabel,
    Paper,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import React from "react";
import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";
import {Sidebar} from "@/app/details/[id]/(components)/Sidebar";
import DashboardChart from "@/app/details/[id]/(components)/DashboardChart";

const STACK_ITEMS = ['Stack 1', 'Stack 2', 'Stack 3', 'Stack 4', 'Stack 5'];

const MOCK_DATA = {
    labels: ['Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
    consumption: [500, 650, 600, 700, 650, 750, 700, 800, 850],
    aiForecast: [750, 650, 600, 700, 690, 700, 750, 790, 810],
    finalForecast: [null, null, null, 750, 620, 700, 700, 780, 800],
};

export default function DashboardPage() {
    const router = useRouter();
    const [selectedId, setSelectedId] = React.useState(STACK_ITEMS[0]);
    const [visible, setVisible] = React.useState({consumption: true, ai: true, final: true});

    return (
        <Box sx={{display: 'flex', bgcolor: '#0b1120', color: '#f8fafc', minHeight: '100vh'}}>
            {/* Sidebar Section */}
            <Box sx={{width: 380, borderRight: '1px solid #1e293b', bgcolor: '#0f172a'}}>
                <ArrowLeft style={{margin: '16px', cursor: 'pointer', color: '#94a3b8'}} onClick={() => router.back()}/>
                <Typography sx={{p: 2, fontWeight: 'bold'}}>Sample Stack</Typography>
                <Sidebar selectedId={selectedId} setSelectedId={setSelectedId} stackItems={STACK_ITEMS}/>
            </Box>

            {/* Main Content */}
            <Box sx={{flex: 1, px: 4}}>
                {/* Header Section from your Screenshot */}
                <Paper sx={{bgcolor: '#1e293b', p: 3, mb: 3, border: '1px solid #334155'}}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                ⚠️ Sample Stack
                            </Typography>
                            <Typography sx={{color: '#94a3b8', fontSize: '0.875rem'}}>
                                Stack Id: 099837465721
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={4} sx={{bgcolor: '#0f172a', p: 1, px: 3, borderRadius: 1}}>
                            <Box><Typography variant="caption"
                                             sx={{color: '#94a3b8'}}>FORECAST</Typography><Typography>89%</Typography></Box>
                            <Box><Typography variant="caption"
                                             sx={{color: '#94a3b8'}}>FORECAST</Typography><Typography>80%</Typography></Box>
                        </Stack>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={4}
                           sx={{mt: 3, pt: 2, borderTop: '1px solid #334155'}}>
                        <FormControlLabel control={<Switch size="small"/>} label="SPECIAL REQUIREMENTS"/>
                        <Box sx={{height: 20, width: '1px', bgcolor: '#334155'}}/>
                        <Typography sx={{color: '#94a3b8', fontSize: '0.8rem'}}>Forecast Horizon: Latest
                            Issue</Typography>
                        <FormControlLabel control={<Switch size="small"/>} label="SHOW CONFIDENCE INTERVAL"/>
                    </Stack>
                </Paper>
                {/* Controls */}
                <Stack direction="row" spacing={3} sx={{mb: 3}}>
                    <FormControlLabel control={<Switch checked={visible.consumption}
                                                       onChange={() => setVisible(p => ({
                                                           ...p,
                                                           consumption: !p.consumption
                                                       }))}/>} label="Consumption"/>
                    <FormControlLabel control={<Switch checked={visible.ai}
                                                       onChange={() => setVisible(p => ({...p, ai: !p.ai}))}/>}
                                      label="AI Forecast"/>
                    <FormControlLabel control={<Switch checked={visible.final} onChange={() => setVisible(p => ({
                        ...p,
                        final: !p.final
                    }))}/>} label="Final Forecast"/>
                </Stack>

                {/* Chart Section */}
                <Paper sx={{bgcolor: '#1e293b', p: 3, height: 400, mb: 4}}>
                    <DashboardChart data={MOCK_DATA} visible={visible}/>
                </Paper>

                {/* Data Table */}
                <TableContainer component={Paper} sx={{bgcolor: '#0f172a', border: '1px solid #1e293b'}}>
                    <Table sx={{'& .MuiTableCell-root': {color: '#cbd5e1', borderBottom: '1px solid #1e293b'}}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Metric</TableCell>
                                {MOCK_DATA.labels.map((l) => <TableCell key={l}>{l}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {['Consumption', 'AI Forecast', 'Final Forecast'].map((row) => (
                                <TableRow key={row}>
                                    <TableCell sx={{fontWeight: 'bold', color: '#f8fafc'}}>{row}</TableCell>
                                    {MOCK_DATA[row === 'Consumption' ? 'consumption' : row === 'AI Forecast' ? 'aiForecast' : 'finalForecast'].map((val, i) => (
                                        <TableCell key={i}>{val ?? '-'}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}