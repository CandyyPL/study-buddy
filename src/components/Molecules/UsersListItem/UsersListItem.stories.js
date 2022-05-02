import UsersListItem from './UsersListItem'

export default {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
}

const Template = (args) => <UsersListItem {...args} />

export const BadGrades = Template.bind({})
BadGrades.args = {
  userData: { name: 'Adam Kowalski', attendance: '50%', average: '2.0' },
}

export const MediumGrades = Template.bind({})
MediumGrades.args = {
  userData: { name: 'Adam Kowalski', attendance: '50%', average: '3.5' },
}

export const GoodGrades = Template.bind({})
GoodGrades.args = {
  userData: { name: 'Adam Kowalski', attendance: '50%', average: '5.0' },
}
