import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
  } from "@mui/material";
  import { Link, useLocation } from "react-router-dom";
  import SchoolIcon from "@mui/icons-material/School";
  import PieChartIcon from '@mui/icons-material/PieChart';
  import PersonIcon from '@mui/icons-material/Person';
  import WarehouseIcon from '@mui/icons-material/Warehouse';
  export const AppMenu = () => {
	const location = useLocation();
	const path = location.pathname;
  
	return (
	  <Box sx={{ flexGrow: 1 }}>
		<AppBar position="static" sx={{ marginBottom: "20px", background: 'linear-gradient(to right, #980cf0, #2557fa)'}}>
		  <Toolbar>
			<IconButton
						  component={Link}
						  to="/"
						  size="large"
						  edge="start"
						  color="inherit"
						  aria-label="warehouse"
						  sx={{ mr: 2 }}>
						  <WarehouseIcon />
					  </IconButton>
			<Typography variant="h6" component="div" sx={{ mr: 5 }}>
			  App management
			</Typography>
			<Button
			  variant={path.startsWith("/publisher") ? "outlined" : "text"}
			  to="/publisher"
			  component={Link}
			  color="inherit"
			  sx={{ mr: 5 }}
			  startIcon={<PersonIcon></PersonIcon>}
			>
			  
   
			  Publishers
			</Button>
			<Button
			  variant={path.startsWith("/publisher/statistics") ? "outlined" : "text"}
			  to="/publisher/statistics"
			  component={Link}
			  color="inherit"
			  sx={{ mr: 5 }}
			  startIcon={<PieChartIcon></PieChartIcon>}
			>
  
			  Average Stars - Statistic
			</Button>
		  </Toolbar>
		</AppBar>
	  </Box>
	);
  };