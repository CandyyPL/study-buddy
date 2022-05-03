import { setupWorker } from 'msw'
import handlers from './handlers/handlers'
import { db } from './db'

export const worker = setupWorker(...handlers)

const createStudetns = () => {
  for (let i = 0; i < 10; i++) {
    db.student.create()
  }
}

createStudetns()

window.mocks = {
  createStudetns,
  getStudents: () => db.student.getAll(),
}
