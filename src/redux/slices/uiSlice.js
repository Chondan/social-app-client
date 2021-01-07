import { createSlice } from '@reduxjs/toolkit';

// UI reducer types
export const SET_ERRORS = "SET_ERRORS"; 
export const LOADING_UI = "LOADING_UI"; // DONE
export const CLEAR_ERROR = "CLEAR_ERROR";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		loading: false,
		errors: {},
	},
	reducers: {
		setLoading: {
			reducer: (state, action) => {
				state.loading = action.payload;
			},
			prepare: (loading) => {
				return {
					payload: loading
				}
			}
		},
		setErrors: {
			reducer: (state, action) => {
				Object.keys(action.payload).forEach(key => {
					state.errors[key] = action.payload[key];
				});
			},
			prepare: (payload) => {
				return { payload }; // { email, password, error, message }
			}
		},
	}
});

const { actions, reducer } = uiSlice;
export const { setLoading, setErrors } = actions;
export default reducer;

const selectLoading = state => state.ui.loading;
const selectErrors = state => state.ui.errors;
export { selectLoading, selectErrors };