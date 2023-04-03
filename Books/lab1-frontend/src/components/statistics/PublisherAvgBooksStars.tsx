import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	CircularProgress,
	Container,
	IconButton,
	Tooltip,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";
import { Publisher } from "../../models/Publisher";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { GlobalURL } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";

interface Statistic {
	id: number;
	publisher: string;
	avg_stars: number;
	book_count: number;
  }
export const PublisherAvgBooksStars = () => {
    const [statistics, setStatistics] = useState<Statistic[]>([]);
    const [loading, setLoading] = useState(false);
 
	useEffect(() => {
		setLoading(true);
		axios.get(`${GlobalURL}/publisher/statistics/`)
		.then(response => {
			setStatistics(response.data);
			setLoading(false);
		})
		.catch(error => {
			console.error(error);
			setLoading(false);
		});
    }, []);

  return (
	<Container>
		<h1>Average Books Stars Publisher</h1>
		<p>Here we have publishers ordered by the average of their books stars</p>
		{loading && <CircularProgress />}
		{!loading && statistics.length === 0 && <p>No statistic found</p>}
		
		{!loading && statistics.length > 0 && (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell >Publisher</TableCell>
							<TableCell align="right">Avg_Stars</TableCell>
							<TableCell align="right">BooksCount</TableCell>
						   
						
						</TableRow>
					</TableHead>
					<TableBody>
				{statistics.map((statistic, index) => (
					<TableRow key={statistic.id}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>{statistic.publisher}</TableCell>
						<TableCell align="right">{statistic.avg_stars}</TableCell>
						<TableCell align="right">{statistic.book_count}</TableCell>
					</TableRow>
				))}
			</TableBody>
						
				</Table>
			</TableContainer>
		)}
	</Container>
);
};

//export default AverageProdYear;