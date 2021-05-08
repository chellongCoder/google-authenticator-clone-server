import path from 'path'

// Lấy đường dẫn thư mục gốc của ứng dụng
const __dirname = path.resolve()

/** controller get home page */
const getHomePage = async (req, res) => {
  return res.sendFile(path.join(`${__dirname}/src/views/home.html`))
}

export {
    getHomePage,
}