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

function AddAddressModal({ open, onClose }) {
  const states = ["Maharashtra", "Karnataka", "Delhi"];

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
        <Box sx={{ p: 3 }}>
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
              label="First Name"
              size="small"
            />

            <TextField
              fullWidth
              label="Last Name"
              size="small"
            />
          </Box>

          <TextField
            fullWidth
            label="Mobile Number"
            size="small"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Pin Code"
            size="small"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Address"
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
              label="City / District"
              size="small"
            />

            <TextField
              select
              fullWidth
              label="State"
              size="small"
            >
              {states.map((state) => (
                <MenuItem
                  key={state}
                  value={state}
                >
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <FormControlLabel
            control={<Checkbox />}
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