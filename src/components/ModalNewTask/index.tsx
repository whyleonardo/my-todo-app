import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Input
} from '@chakra-ui/react'

interface ModalNewTaskProps {
  onClose: () => void
  isOpen: boolean
  handleChangeTask: any
  handleCreateNewTask: any
  newTaskInfo: any
}

export const ModalNewTask = ({ onClose, isOpen, handleChangeTask, handleCreateNewTask, newTaskInfo }: ModalNewTaskProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name='title'
              mb='1rem'
              value={newTaskInfo.title}
              placeholder='Title'
              onChange={handleChangeTask}
              maxLength={15}
            />
            <Textarea
              name='description'
              value={newTaskInfo.description}
              resize='none'
              placeholder='Description'
              onChange={handleChangeTask}
              maxLength={50}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              bg='brand.400'
              color='brand.100'
              filter='auto'
              _hover={{ brightness: '110%' }}
              mr={3}
              onClick={handleCreateNewTask}
              disabled={newTaskInfo.title == ''}
            >
              Create
            </Button>
            <Button onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

