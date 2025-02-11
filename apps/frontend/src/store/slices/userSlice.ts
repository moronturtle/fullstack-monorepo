import { User as UserInterface } from '@fullstack-monorepo/shared/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userInfo: UserInterface[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInterface[] | null>) => {
      state.userInfo = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<Partial<UserInterface>>) => {
      if (state?.userInfo) {
        state.userInfo = state.userInfo.map((user) =>
          user.docId === action.payload.docId ? { ...user, ...action.payload } : user,
        );
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUserInfo, updateUserInfo, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
