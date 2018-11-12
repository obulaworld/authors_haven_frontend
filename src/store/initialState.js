/**
 * @desc the initial state on the application
*/
const initialState = {
  auth: {
    login: {
      processing: false,
      error: ''
    },
    signup: {
      isAuth: false,
      verified: false,
      registered: false,
      progress: false,
      update: false,
    },
    user: {

    },
    isAuth: false,
  },
  publishedArticle: {
    article: {},
    isPublished: false,
    processing: false,
    error: '',
    loading: false
  }
};

export default initialState;
