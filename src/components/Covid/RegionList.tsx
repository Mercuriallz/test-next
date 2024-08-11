import { allRegion } from "@/store/covid-store";
import { Box, Button, Divider, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import * as XLSX from "xlsx";

export default function RegionList() {
    const region = allRegion((state) => state);
    const { getRegion, currentPage, totalPages, isLoading, regionList } = region;

    const perPage = 20;
    const order = 'name';
    const sort = 'desc';

    useEffect(() => {
        getRegion(currentPage, perPage, order, sort);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            getRegion(currentPage + 1, perPage, order, sort);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            getRegion(currentPage - 1, perPage, order, sort);
        }
    };

    const handleDownloadExcel = () => {
        const worksheets = XLSX.utils.json_to_sheet(regionList.map(({ iso, name }) => ({ ISO: iso, NAME: name })));
        const workbooks = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbooks, worksheets, "Regions");
        XLSX.writeFile(workbooks, "regions.xlsx");
    };
    

    return (
        <>
            <ToastContainer />
            <Box>
                <Typography sx={{ marginBottom: "10px" }}>
                    Country List
                </Typography>
                <Divider />

           
                {
                    !isLoading &&
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleDownloadExcel}
                        sx={{ marginBottom: "10px" }}
                    >
                        Download Excel
                    </Button>
                }

                    

                <TableContainer component={Paper}>
                    <Table aria-label="simple table" style={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ISO</TableCell>
                                <TableCell>NAME</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading ? (
                                <TableRowsLoader rowsNum={10} />
                            ) : (
                                regionList.map((data) => (
                                    <TableRow key={data.iso} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell align="left">
                                            {data.iso ?? 'Invalid iso / undefined iso'}
                                        </TableCell>
                                        <TableCell align="left">
                                            {data.name ?? 'Invalid name country / undefined name'}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <Typography>Page {currentPage} of {totalPages}</Typography>
                    <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </Button>
                </Box>
            </Box>
        </>
    );
}

const TableRowsLoader = ({ rowsNum }: { rowsNum: number }) =>
    [...Array(rowsNum)].map((_, index) => (
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
        </TableRow>
    ));
