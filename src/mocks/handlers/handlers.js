import { rest } from 'msw'
import { groups } from 'mocks/data/groups'
import { db } from 'mocks/db'

const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(groups))
  }),

  rest.get('/students', (req, res, ctx) => {
    const groupId = req.url.searchParams.get('groupId')
    const studentId = req.url.searchParams.get('id')

    if (groupId && !studentId) {
      const matchingStudents = db.student.findMany({ where: { group: { equals: groupId } } })
      return res(ctx.status(200), ctx.json({ students: matchingStudents }))
    }

    if (studentId && !groupId) {
      const matchingStudent = db.student.findFirst({ where: { id: { equals: studentId } } })
      return res(ctx.status(200), ctx.json({ matchingStudent }))
    }

    const students = db.student.getAll()
    return res(ctx.status(200), ctx.json({ students }))
  }),
]

export default handlers
