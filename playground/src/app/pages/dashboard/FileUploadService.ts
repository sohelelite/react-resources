import http from "./http-common";

const upload = (file: File, onUploadProgress: any): Promise<any> => {
    let formData = new FormData()

    formData.append("file", file)

    return http.post("/api/students/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    })
}

const getFiles = (): Promise<any> => {
    return http.get("/students/files")
}

const FileUploadService = {
    upload,
    getFiles
}

export default FileUploadService