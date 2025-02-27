# Basic File Upload Server (Node.js)

A simple file upload server built using **Node.js** without external libraries. This project manually handles multipart form data to save uploaded files to a local directory.

## Features
- Handles file uploads via HTTP `POST` requests
- Parses multipart form data manually
- Saves uploaded files to the `upload` directory

## Technologies Used
- Node.js (Raw HTTP module)
- File System (`fs` module)
- URL Parsing (`url` module)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/file-upload-server.git
   cd file-upload-server
   ```
2. Install dependencies (not required since it uses only built-in modules).
3. Run the server:
   ```sh
   node server.js
   ```
4. The server starts on `http://localhost:3000`.

## Usage
To upload a file, send a `POST` request to `http://localhost:3000/uploads` with a file in the request body using tools like **Postman** or a simple HTML form.

Example using **cURL**:
```sh
curl -X POST -F "file=@path/to/your/file" http://localhost:3000/uploads
```

## Limitations
- No error handling for large files or unsupported formats.
- Synchronous file writing (`fs.writeFileSync`) may block the event loop.
- No support for multiple file uploads in a single request.

## Future Improvements
- Migrate to **Express.js** and use **Multer** for efficient file handling.
- Implement file validation and error handling.
- Store file metadata in a database.

## License
This project is licensed under the **MIT License**.

---
### Author
**[Your Name]**  
LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)  
GitHub: [YourUsername](https://github.com/yourusername)

