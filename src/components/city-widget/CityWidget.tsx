import React from 'react';
import {Box, Paper, Typography} from '@mui/material';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js';
import Link from "next/link";
import {ROUTES} from "@/contants/routes";
import {CityData} from "@/types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const CityCard = ({city}: { city: CityData }) => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {tooltip: {enabled: true}},
        scales: {x: {display: false}, y: {display: false}},
        elements: {point: {radius: 0}, line: {tension: 0.4, borderWidth: 2}}
    };

    const chartData = {
        labels: ['', '', '', '', ''],
        datasets: [{data: city.chartData, borderColor: '#7cc7ff', backgroundColor: 'transparent'}]
    };

    return (
        // Gradient Border Wrapper
        <Link href={ROUTES.DETAIL_BY_ID(city.id)} style={{textDecoration: 'none'}}>
            <Box sx={{
                // background: 'linear-gradient(135deg, #1a73e8 0%, #00e676 100%)',
                // padding: '1px', // The border thickness
                // borderRadius: '16px',
                width: '300px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '250px',
            }}>

                <Paper sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1a73e8 0%, #00e676 100%)',
                    color: 'white',
                    p: 3,
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    opacity: 1,
                    transition: 'opacity 0.3s',
                    zIndex: -1,
                }}>
                </Paper>
                <Paper sx={{
                    bgcolor: '#0f172a',
                    color: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    p: 3,
                    my: '2px',
                    width: 'calc(100% - 4px)', // Adjust for border thickness
                    minHeight: '250px', // Adjust for border thickness
                }}>
                    <Typography variant="h6">{city.name}</Typography>

                    {/* Forecast Rows */}
                    {[{val: city.metric1, trend: 'up'}, {val: city.metric2, trend: 'down'}].map((item, i) => (
                        <Box key={i} display="flex" justifyContent="space-between" alignItems="center">
                            <Box>
                                <Typography variant="caption" color="gray">Forecast</Typography>
                                <Typography variant="h5">{item.val}</Typography>
                            </Box>
                            <Box width={80} height={30}>
                                <Line data={chartData} options={chartOptions}/>
                            </Box>
                            <Typography color={item.trend === 'up' ? 'green' : 'red'}>
                                {item.trend === 'up' ? '↑' : '↓'}
                            </Typography>
                        </Box>
                    ))}
                </Paper>
            </Box>
        </Link>

    );
};

export default CityCard;