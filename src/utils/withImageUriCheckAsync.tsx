import isValidImageUriAsync from "./isValidImageUriAsync";

const withImageUriCheckAsync = (
  imageUri: string,
  callback: (imageStatus: boolean) => any
) => {
  return async () => {
    const imageStatus = await isValidImageUriAsync(imageUri);
    await callback(imageStatus);
  };
};

export default withImageUriCheckAsync;
