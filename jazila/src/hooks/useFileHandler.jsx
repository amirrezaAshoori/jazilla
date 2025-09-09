import { useState } from 'react';
import { toast } from 'sonner';

export const useFileHandler = (type = 'multiple', initState) => {
    const [imageFile, setImageFile] = useState(initState);
    const [isFileLoading, setFileLoading] = useState(false);

    const removeImage = (id) => {
        if (!Array.isArray(imageFile)) return;

        const items = imageFile.filter((item) => item.id !== id);
        setImageFile(items);
    };

    const clearFiles = () => {
        setImageFile(initState);
    };

    const onFileChange = (event, callback) => {
        if (!event.target.files) return;

        if (event.target.files.length + (Array.isArray(imageFile) ? imageFile.length : 0) > 5) {
            return toast.error('Maximum of 5 photos per post allowed.');
        }

        // TODO ===  FILTER OUT DUPLICATE IMAGES

        const val = event.target.value;
        const img = event.target.files[0];

        if (!img) return;

        const size = img.size / 1024 / 1024;
        const regex = /(\.jpg|\.jpeg|\.png)$/i;

        setFileLoading(true);

        if (!regex.exec(val)) {
            toast.error('File type must be JPEG or PNG');
            setFileLoading(false);
        } else if (size > 5) {
            toast.error('File size exceeded 5mb');
            setFileLoading(false);
        } else if (type === 'single') {
            const file = event.target.files[0];
            const url = URL.createObjectURL(file);

            setImageFile({
                file,
                url,
                id: file.name,
            });

            if (callback) callback({
                file,
                url,
                id: file.name,
            });
            setFileLoading(false);
        } else {
            Array.from(event.target.files).forEach((file) => {
                const url = URL.createObjectURL(file);
                setImageFile((oldFiles) => [
                    ...(oldFiles || []),
                    {
                        file,
                        url,
                        id: file.name,
                    },
                ]);
            });
            if (callback) callback(img);
            setFileLoading(false);
        }
    };

    return {
        imageFile,
        setImageFile,
        isFileLoading,
        onFileChange,
        removeImage,
        clearFiles,
    };
};