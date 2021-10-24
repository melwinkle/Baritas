import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
	Box, Button, Snackbar, Table,
	TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// Creating styles
const useStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
	table: {
		minWidth: 1050,
	},
	snackbar: {
		bottom: "104px",
	},
	td: {
		backgroundColor: "white",

	},
});

function TableDemo() {
	// Creating style object
	const classes = useStyles();

	// Defining a state named rows
	// which we can update by calling on setRows function
	const [rows, setRows] = useState([
		{ id: 0, menuitem: "", category: "", price: "" },
	]);

	// Initial states
	const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);

	// Function For closing the alert snackbar
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	// Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1,menuitem: "", category: "", price: ""
			},
		]);
		setEdit(true);
	};

	// Function to handle edit
	const handleEdit = (i) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		setEdit(!isEdit);
	};

	// Function to handle save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	// Showing delete confirmation to users
	const handleConfirm = () => {
		setShowConfirm(true);
	};

	// Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	// Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

return (
	<TableBody>
	<Snackbar
		open={open}
		autoHideDuration={2000}
		onClose={handleClose}
		className={classes.snackbar}
	>
		<Alert onClose={handleClose} severity="success">
		Record saved successfully!
		</Alert>
	</Snackbar>
	<Box margin={1}>
		<div style={{ display: "flex", justifyContent: "space-between" }}>
		<div>
			{isEdit ? (
			<div>
				<Button onClick={handleAdd}>
				<AddBoxIcon onClick={handleAdd} />
				ADD
				</Button>
				{rows.length !== 0 && (
				<div>
					{disable ? (
					<Button disabled align="right" onClick={handleSave}>
						<DoneIcon />
						SAVE
					</Button>
					) : (
					<Button align="right" onClick={handleSave}>
						<DoneIcon />
						SAVE
					</Button>
					)}
				</div>
				)}
			</div>
			) : (
			<div>
				<Button onClick={handleAdd}>
				<AddBoxIcon onClick={handleAdd} />
				ADD
				</Button>
				<Button align="right" onClick={handleEdit}>
				<CreateIcon />
				EDIT
				</Button>
			</div>
			)}
		</div>
		</div>
		

		<Table
		className={classes.table}
		size="large"
		aria-label="a dense table"
		>
		<TableHead>
	
			<TableRow>
				<TableCell>#</TableCell>
				<TableCell>Name</TableCell>
				<TableCell>Category</TableCell>
				<TableCell>Price</TableCell>
				<TableCell>Actions</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{rows.map((row, i) => {
			return (
				<div>
				<TableRow>
					{isEdit ? (
					<div>
						<TableCell padding="none">
						<input
							value={row.menuid}
							name="menuid"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
						<TableCell padding="none">
						<input
							value={row.menuitem}
							name="menuitem"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
						
						<TableCell padding="none">
						<select
							style={{ width: "100px" }}
							name="category"
							value={row.category}
							onChange={(e) => handleInputChange(e, i)}
						>
							<option value=""></option>
							<option value="Hot/Spicy">Hot/Spicy</option>
							<option value="Rice">Rice</option>
							<option value="Sandwich">Sandwich</option>
							<option value="Chicken">Chicken</option>
							<option value="Pasta">Pasta</option>
						</select>
						</TableCell>
						<TableCell padding="none">
						<input
							value={row.price}
							name="price"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell>
						
					</div>
					) : (
					<div>
						<TableCell component="td" scope="col">
						{row.menuid}
						</TableCell>
						<TableCell component="td" scope="col">
						{row.menuitem}
						</TableCell>
						<TableCell component="td" scope="col" >
						{row.category}
						</TableCell>
						<TableCell component="td" scope="col" >
						{row.price}
						</TableCell>
						
					</div>
					)}
					{isEdit ? (
					<Button className="mr10" onClick={handleConfirm}>
						<ClearIcon />
					</Button>
					) : (
					<Button className="mr10" onClick={handleConfirm}>
						<DeleteOutlineIcon />
					</Button>
					)}
					{showConfirm && (
					<div>
						<Dialog
						open={showConfirm}
						onClose={handleNo}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<DialogTitle id="alert-dialog-title">
							{"Confirm Delete"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
							Are you sure to delete
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
							onClick={() => handleRemoveClick(i)}
							color="primary"
							autoFocus
							>
							Yes
							</Button>
							<Button
							onClick={handleNo}
							color="primary"
							autoFocus
							>
							No
							</Button>
						</DialogActions>
						</Dialog>
					</div>
					)}
				</TableRow>
				</div>
			);
			})}
		</TableBody>
		</Table>
	</Box>
	</TableBody>
);
}

export default TableDemo;

