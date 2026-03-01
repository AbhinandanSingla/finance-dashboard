import React from 'react';
import {Box, Paper, Typography} from '@mui/material';
import {Line} from 'react-chartjs-2';
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip} from 'chart.js';
import Link from "next/link";
import {ROUTES} from "@/contants/routes";
import {CityData} from "@/types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const CityCard = ({city}:{city:CityData}) => {
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
                background: 'linear-gradient(135deg, #1a73e8 0%, #00e676 100%)',
                padding: '1px', // The border thickness
                borderRadius: '16px',
                width: '300px'
            }}>

                <Paper sx={{
                    bgcolor: '#0f172a',
                    color: 'white',
                    p: 3,
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
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