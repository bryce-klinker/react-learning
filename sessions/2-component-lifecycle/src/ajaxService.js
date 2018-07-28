const ajaxService = {
  get: () => Promise.resolve({ name: 'This was loaded from a promise' }),
};

export default ajaxService;
