export default async function isValidImageUriAsync(imageUri: string) {
  const response = await fetch(imageUri);

  if (!response.ok) {
    return true;
  } else {
    const imageBlob = await response.blob();
    return imageBlob.type.startsWith("image/");
  }
}
