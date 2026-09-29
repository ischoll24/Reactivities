import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Container, Typography, Button, MenuList, MenuItem } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'}}>
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
                </MenuList>
                <MenuList>
                    <MenuItem>User Menu</MenuItem>
                </MenuList>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
