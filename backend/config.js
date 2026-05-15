import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  dataDir: path.join(__dirname, '../data'),
  contactsFile: path.join(__dirname, '../data/contacts.json'),
  statsFile: path.join(__dirname, '../data/stats.json'),
  dataFile: path.join(__dirname, '../../data.json')
}
