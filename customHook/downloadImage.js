//Custom hook for reuse in dowloading images
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

const downloadFile = (uri) => {
    const sptArr  = uri.split('/');
    const filename = sptArr[sptArr.length - 1];
    let fileUri = FileSystem.documentDirectory + filename;
    FileSystem.downloadAsync(uri, fileUri)
    .then(({ uri }) => {
        saveFile(uri);
    })
    .catch(error => {
       console.error(error);
    })
}

saveFile = async (fileUri) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
}

export default downloadFile;