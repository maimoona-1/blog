import { createSlice } from '@reduxjs/toolkit';

const initialPosts = [
  {
    id: 1,
    avatarUrl: 'https://material-ui.com/static/images/avatar/6.jpg',
    author: 'Jhon Doe',
    datePosted: 'Sept 22, 2022',
    mainImageUrl: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    description: 'A good breakfast fuels you up and gets you ready for the day. Good morning',
    comments: [{ datePosted: new Date().toLocaleDateString(), text: 'Default comment' }],
  },
  {
    id: 2,
    avatarUrl: 'https://material-ui.com/static/images/avatar/3.jpg',
    author: 'Elena',
    datePosted: 'Sept 22, 2022',
    mainImageUrl:
      'https://www.dailynationpakistan.com/wp-content/uploads/2022/08/worst-ever-flood-in-pakistan-smk-mojo-222-sk.jpg',
    description:
      'Donating to the Disaster Relief Fund is a tangible demonstration of the meaning of compassion.Your donation will help them to recover physically, emotionally and spiritually',
    comments: [],
  },
];

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [...initialPosts],
  },
  reducers: {
    createPost: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // add in start of array
      state.posts.unshift(action.payload);
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const postIndex = state.posts.findIndex(post => post.id === postId);

      // add in start of array /
      state.posts[postIndex].comments.unshift(comment);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createPost, addComment } = postSlice.actions;

export default postSlice.reducer;
