import { configureStore } from '@reduxjs/toolkit';

import sideBarReducer from '../features/SideBar/model/store/sideBarSlice';
import ticketListReducer from '../features/TicketList/model/store/ticketListSlice';

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    ticketList: ticketListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
