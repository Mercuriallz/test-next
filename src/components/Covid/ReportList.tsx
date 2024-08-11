import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import { useAllRegionStore } from "@/store/report-covid-store";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from "dayjs";

const RegionList = () => {
    const { regionList, isLoading, currentPage, totalPages, getRegion } = useAllRegionStore();
    const [search, setSearch] = useState("");
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

    useEffect(() => {
        if (selectedDate) {
            getRegion(1, 20, "name", "desc", selectedDate.toDate());
        }
    }, [getRegion, selectedDate]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages && selectedDate) {
            getRegion(newPage, 20, "name", "desc", selectedDate.toDate(), search);
        }
    };

    const handleSearch = () => {
        if (selectedDate) {
            getRegion(3, 20, "name", "desc", selectedDate.toDate(), search);
        }
    };

    const handleDateChange = (newDate: Dayjs | null) => {
        setSelectedDate(newDate);
        if (newDate) {
            getRegion(3, 20, "name", "desc", newDate.toDate(), search);
        }
    };

    if (isLoading) {
        return (
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <CircularProgress />
            </Grid>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom align="center">
                COVID-19 Regions
            </Typography>

            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        id="filled-search"
                        label="Search by Region"
                        type="search"
                        variant="filled"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Select Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    variant: 'filled',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Button fullWidth variant="contained" onClick={handleSearch}>
                        Search
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {regionList.length > 0 ? (
                    regionList.map((datum) => (
                        <Grid item xs={12} sm={6} md={4} key={datum.active}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {datum.region.name} ({datum.region.iso})
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Province: {datum.region.province || "N/A"}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        City: {datum.region.cities[0]?.name || "N/A"}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Cases: {datum.region.cities[0]?.confirmed || "N/A"}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Deaths: {datum.deaths}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center">
                            No data available
                        </Typography>
                    </Grid>
                )}
            </Grid>

            <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
                <Button
                    variant="outlined"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Typography variant="body2">
                    Page {currentPage} of {totalPages}
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </Grid>
        </div>
    );
};

export default RegionList;
