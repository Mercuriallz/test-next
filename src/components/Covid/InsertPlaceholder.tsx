import { InsertTitleSchema } from '@/lib/zod';
import { useStore } from '@/store/insert.placeholder';
import { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

interface FormData {
    userId: number | string;
    id: number | string;
    title: string;
    body: string;
}

const PostForm: React.FC = () => {
    const addData = useStore((state) => state.addData);
    const [formData, setFormData] = useState<FormData>({
        userId: '',
        id: '',
        title: '',
        body: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const parsedData = InsertTitleSchema.safeParse(formData);

        if (!parsedData.success) {
            console.error('Validation failed:', parsedData.error);
            return;
        }

        addData(parsedData.data);
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    mt: 4,
                    p: 4,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    backgroundColor: '#f9f9f9',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Submit Post
                </Typography>
                <TextField
                    label="User ID"
                    type="number"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="ID"
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default PostForm;
