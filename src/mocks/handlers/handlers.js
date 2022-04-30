import { rest } from 'msw'
import { students } from 'mocks/data/students'
import { groups } from 'mocks/data/groups'

const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(groups))
  }),

  rest.get('/students/:groupId', (req, res, ctx) => {
    if (req.params.groupId) {
      const matchingStudents = students.filter(({ group }) => group === req.params.groupId)
      return res(ctx.status(200), ctx.json({ students: matchingStudents }))
    }

    return res(ctx.status(200), ctx.json({ groups }))
  }),
]

export default handlers
