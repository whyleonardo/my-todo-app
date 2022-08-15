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
            />
            <Textarea
              name='description'
              value={newTaskInfo.description}
              resize='none'
              placeholder='Description'
              onChange={handleChangeTask}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={handleCreateNewTask}>
              Criar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

