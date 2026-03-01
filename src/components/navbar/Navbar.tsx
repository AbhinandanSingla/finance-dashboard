import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Globe, Menu, User} from "lucide-react"

export const Navbar = () => {
    return (
        <header>
            <Stack
                direction="row"
                sx={{
                    zIndex: 999,
                    position:"relative",
                    justifyContent: "space-between",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    background: "#000",
                    color: '#fff'
                }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5rem",
                }}>
                    <Menu/>
                    <Typography>
                        Webapp
                    </Typography>
                </Box>

                <Stack
                    direction="row"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Globe/>
                    <Stack
                        direction={"row"}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <User/>
                        <Typography>
                            User
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>
        </header>
    )
}