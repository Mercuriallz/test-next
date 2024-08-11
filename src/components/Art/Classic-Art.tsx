'use client';

import { Datum } from '@/dao/classic-art';
import { Nightlife } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  // Drawer,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 'none',
  p: 4,
  height: '100%',
  overflow: 'scroll',
};

export default function ClassicArts() {
  const [dataArt, setDataArt] = useState<Datum[]>([]);
  const [detailId, setDetailId] = useState(0);
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  function closeDetail() {
    setIsOpenDetail(false);
  }

  // FETCH API
  async function getClassicArt() {
    // setDataArt([]);

    await axios
      .get('https://api.artic.edu/api/v1/artworks')
      .then((result) => {
        if (result.status === 200) {
          setDataArt(result.data.data);
        }
      })
      .catch((err) => {
        toast.error(err, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'dark',
        });
      });
  }

  let artDetail = dataArt.find((obj) => Number(obj.id) === Number(detailId));

  if (artDetail === null || undefined) {
    return (
      <>
        <Typography fontWeight="bold">Art Detail No Found</Typography>
      </>
    );
  }

  const artDescription = artDetail?.description;

  const artReplace = artDescription?.replace(/<\/?[^>]+>/gi, '');

  useEffect(() => {
    getClassicArt();
  }, []);

  return (
    <>
      <ToastContainer />
      <Typography sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Classic Art Database
      </Typography>
      <Divider />
      <TableContainer component={Paper}>
        <Table
          aria-label="simple table"
          style={{
            minWidth: 650,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArt.map((data) => {
              return (
                <TableRow
                  key={data.id}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  <TableCell component="th" scope="data">
                    {data.title === null ? (
                      <Typography>No Title Name</Typography>
                    ) : (
                      data.title
                    )}
                  </TableCell>
                  <TableCell align="left">
                    {data.artist_title === null ? (
                      <Typography>No Artist Name</Typography>
                    ) : (
                      data.artist_title
                    )}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      sx={{
                        height: 45,
                        backgroundColor: 'blue',
                        color: 'white',
                        fontWeight: 'bold',
                        borderColor: 'transparent',
                        borderRadius: 20,
                        marginTop: 2,
                        '&:hover': {
                          backgroundColor: 'darkblue',
                        },
                      }}
                      onClick={() => {
                        setDetailId(Number(data.id));
                        setIsOpenDetail(true);
                      }}
                    >
                      Detail
                    </Button>
                    <Modal
                      open={isOpenDetail}
                      onClose={closeDetail}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      sx={{
                        '& .MuiBackdrop-root': {
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      <Box sx={style}>
                        <Box>
                          <Image
                            src={`https://www.artic.edu/iiif/2/${artDetail?.image_id}/full/843,/0/default.jpg`}
                            alt={`${artDetail?.thumbnail.alt_text}`}
                            width={300}
                            height={300}
                            style={{
                              display: 'block',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              marginBottom: '10px',
                              // width: '50%',
                            }}
                          />
                          <Typography>
                            Art No:
                            <Box component="span" fontWeight="bold">
                              {detailId}
                            </Box>
                          </Typography>
                          <Divider />
                          <Typography>
                            Title:{' '}
                            <Box component="span" fontWeight="bold">
                              {artDetail?.title}
                            </Box>
                          </Typography>
                          <Divider />
                          <Typography>
                            Artist:{' '}
                            <Box component="span" fontWeight="bold">
                              {artDetail?.artist_title === null ? (
                                <Typography fontWeight="bold">
                                  The artist of this art has no name
                                </Typography>
                              ) : (
                                artDetail?.artist_title
                              )}
                            </Box>
                          </Typography>
                          <Divider />
                          <Typography>Description: </Typography>
                          <Box component="span" fontWeight="bold">
                            {artReplace === undefined || null ? (
                              <Typography fontWeight="bold">
                                No Description
                              </Typography>
                            ) : (
                              artReplace
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Modal>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
