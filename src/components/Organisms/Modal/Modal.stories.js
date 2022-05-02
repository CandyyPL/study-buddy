import StudentDetails from 'components/Molecules/StudentDetails/StudentDetails'
import Modal from './Modal'

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
}

const studentData = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '3.5',
  group: 'A',
  course: 'Economy and finances',
  subAverages: [
    {
      subject: 'Modern Economy',
      average: '4.1',
    },
    {
      subject: 'Trade and Logistics',
      average: '2.9',
    },
  ],
}

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails student={studentData} />
  </Modal>
)

export const Default = Template.bind({})
