import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  IconButton,
} from "@mui/material";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import api from "../../api/api";

function AddAddressModal({ open, onClose, onSuccess }) {

  const states = [
      "Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Maharashtra",
      "Delhi",
    ];
  const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state: "",
        postal_code: "",
        country: "India",
        is_default: false,
      });

      const handleChange = (e) => {
      const { name, value, checked, type } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };


    const handleSave = async () => {
        try {
          const token = localStorage.getItem("access");

          await api.post(
            "api/user/address/add/",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          alert("Address added successfully.");

          onSuccess();
          onClose();

          setFormData({
            full_name: "",
            email: "",
            phone: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            state: "",
            postal_code: "",
            country: "India",
            is_default: false,
          });
        } catch (error) {
          console.log(error);
          alert("Failed to add address");
        }
      };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-address-modal"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "95%",
            sm: 450,
            md: 550,
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 1,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 3,
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Add New Address
          </Typography>

          <IconButton onClick={onClose}>
            <FiX />
          </IconButton>
        </Box>

        {/* Form */}
        <Box sx={{ p:3  }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 2,
              mb: 3,
            }}
          >
            <TextField
              fullWidth
              label="Full Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              size="small"
              sx={{ mb: 3 }}
            />
          </Box>

          <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              sx={{ mb: 3 }}
            />

            <TextField
                fullWidth
                label="Mobile Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                size="small"
                sx={{ mb: 3 }}
              />
          <TextField
            fullWidth
            label="Pin Code"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            size="small"
            sx={{ mb: 3 }}
          />


          <TextField
          fullWidth
          multiline
          rows={3}
          label="Address"
          name="address_line_1"
          value={formData.address_line_1}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        <TextField
        fullWidth
        label="Address Line 2"
        name="address_line_2"
        value={formData.address_line_2}
        onChange={handleChange}
        size="small"
        sx={{ mb: 3 }}
      />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 2,
              mb: 3,
            }}
          >
            <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            size="small"
          />

            <TextField
              select
              fullWidth
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              size="small"
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <TextField
            fullWidth
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            size="small"
            sx={{ mt: 3 }}
          />

          <FormControlLabel
              control={
                <Checkbox
                  name="is_default"
                  checked={formData.is_default}
                  onChange={handleChange}
                />
              }
              label="Make this my default shipping address"
            />
        </Box>

        {/* Footer */}
        <Box
          sx={{
            borderTop: "1px solid #e5e5e5",
            bgcolor: "#fafafa",
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              bgcolor: "#4b4b4b",
              "&:hover": {
                bgcolor: "#333",
              },
            }}
          >
            Save Address
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddAddressModal;