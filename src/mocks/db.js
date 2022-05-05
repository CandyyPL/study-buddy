import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

faker.seed(123)

const randomCourse = () => faker.name.jobType()
const randomSubject = () => faker.name.jobTitle()
const randomAverage = () => faker.datatype.float({ min: 2, max: 5, precision: 0.1 })

const groups = ['A', 'B', 'C']

const randomGroup = (index) => groups[index]

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.name.findName(),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: () => randomAverage(),
    group: () => randomGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => randomCourse(),
    subAverages: () => [
      {
        subject: randomSubject(),
        average: randomAverage(),
      },
      {
        subject: randomSubject(),
        average: randomAverage(),
      },
      {
        subject: randomSubject(),
        average: randomAverage(),
      },
    ],
  },
})
