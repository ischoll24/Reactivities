import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Container, Typography, Button, MenuList, MenuItem, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function NavBar() {
    const {uiStore} = useStore();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)', position: 'relative'}}>
            <Container maxWidth='xl'>
                <Toolbar sx={{display: "flex", justifyContent: 'space-between'}}>
                    <Box>
                        <Button component={NavLink} to='/' color="inherit" sx={{display: 'flex', gap:2, textTransform: 'none'}}>
                            <Group fontSize="large" />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Reactivities</Typography>
                        </Button>
                    </Box>
                    <MenuList sx={{display: 'flex'}}>
                        <MenuItemLink to='/activities'>
                            Activities
                        </MenuItemLink>
                        <MenuItemLink to='/createActivity'>
                            Create Activity
                        </MenuItemLink>
                        <MenuItemLink to='/counter'>
                            Counter
                        </MenuItemLink>
                    </MenuList>
                    <MenuList>
                        <MenuItem>User Menu</MenuItem>
                    </MenuList>
                </Toolbar>
            </Container>
            <Observer>
                {() =>
                    uiStore.isLoading ? (
                        <LinearProgress
                            color="secondary"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 4, // Adjust height if needed
                            }}
                        />
                    ) : null
                }
            </Observer>
        </AppBar>
        </Box>
    )
}
