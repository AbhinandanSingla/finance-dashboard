import {Box, Chip, List, ListItemButton, Tab, Tabs, Typography} from "@mui/material";
import {MessageCircle} from "lucide-react";
import React from "react";

export const Sidebar = ({stackItems, selectedId, setSelectedId}) => {
    function handleChange(event: React.SyntheticEvent, newValue: string) {
    }

    return (
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs
                value={'one'}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                sx={{
                    '& .MuiTabs-indicator': {backgroundColor: '#3b82f6'},
                    '& .MuiTab-root': {
                        color: '#94a3b8',
                        '&.Mui-selected': {color: '#3b82f6'},
                    },
                }}
            >
                <Tab
                    value="one"
                    label="BACKLOG"
                    wrapped
                />
                <Tab value="two" label="PENDING"/>
                <Tab value="three" label="FINAL SIGN-OFF"/>
            </Tabs>
            <List sx={{p: 0}}>
                {stackItems.map((item) => (
                    <ListItemButton
                        key={item}
                        selected={selectedId === item}
                        onClick={() => setSelectedId(item)}
                        sx={{
                            borderBottom: '1px solid #1e293b',
                            '&.Mui-selected': {bgcolor: '#1e293b'},
                            '&:hover': {bgcolor: '#1e293b', border: '#1e293b', backdrop: 'blur(4px)'},
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: "space-between",
                            width: '100%'
                        }}>
                            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                                <Box sx={{display: 'flex', gap: 1, mb: 0.5}}>
                                    <input type={'checkbox'}/>
                                    <Chip label="↓ F'CAST STAB." size="small"
                                          sx={{bgcolor: '#1e293b', color: '#94a3b8'}}/>
                                    <Chip label="↑ F'CAST ACC." size="small"
                                          sx={{bgcolor: '#1e293b', color: '#94a3b8'}}/>
                                </Box>
                                <Typography variant="caption">{item}</Typography>
                            </Box>
                            <MessageCircle/>
                        </Box>
                    </ListItemButton>
                ))}
            </List>
        </Box>)
}
