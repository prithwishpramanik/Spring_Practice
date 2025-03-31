import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const ExamRegistrationForm = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/examRegistrationPortal/getState"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      phone,
      address,
      dateOfBirth,
      selectedState,
    };
    try {
      await axios.post(
        "http://localhost:8080/examRegistrationPortal/register",
        formData
      );
      setOpenSnackbar(true);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setDateOfBirth("");
      setSelectedState("");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Exam Registration
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          required
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <TextField
          label="Date of Birth"
          fullWidth
          margin="normal"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          type="date"
          InputLabelProps={{ shrink: true }}
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map((state) => (
              <MenuItem key={state.id} value={state.stateName}>
                {state.stateName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
        >
          Register
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registration successful!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ExamRegistrationForm;
