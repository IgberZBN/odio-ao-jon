const path = "./ip.txt"
const file = Bun.file(path)

const text = await file.text()

export default text
