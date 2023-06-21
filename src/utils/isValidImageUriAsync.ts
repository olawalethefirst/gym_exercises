export default async function isValidImageUriAsync(imageUri: string) {
  const response = await fetch(imageUri);
  const imageBlob = await response.blob();

  if (imageBlob.type.startsWith("image/")) {
    return true;
  } else {
    return false;
  }
}
