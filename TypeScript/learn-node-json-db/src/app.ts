import prompts from 'prompts'
import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

const db = new JsonDB(new Config('unibba', true, true, '/'))

const showAddDataMenu = async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'Insert your name',
      validate: (name) => (!name ? "Name can't be empty" : true),
    },
    {
      type: 'text',
      name: 'id',
      message: 'Insert your Student ID Number',
      validate: (id) => {
        if (!id) {
          return "ID can't be empty"
        }
        if (isNaN(id)) {
          return 'ID should be numbers'
        }
        return true
      },
    },
    {
      type: 'autocomplete',
      name: 'major',
      message: 'Choose your major',
      choices: [
        { title: 'Sistem Informasi', value: 'SI' },
        { title: 'Teknik Informatika', value: 'IF' },
      ],
      validate: (major) => (!major ? "Major can't be empty" : true),
    },
  ])

  // console.log(response)

  try {
    db.push('/mahasiswa[]', {
      name: response.name,
      id: response.id,
      major: response.major,
    })
    console.clear()
    console.log('Data added successfully!')
    showMainMenu()
  } catch (err) {
    console.clear()
    console.error(err)
    showAddDataMenu()
  }
}

const showTable = async <T>(data: T) => {
  console.clear()
  console.table(data)
  const response = await prompts({
    type: 'confirm',
    name: 'isBackToMenu',
    message: 'Back to main menu?',
    initial: true,
  })

  if (response.isBackToMenu) {
    console.clear()
    showMainMenu()
  } else {
    console.clear()
    readData()
  }
}

const readData = async () => {
  const data = db.getData('/mahasiswa')
  showTable(data)
}

const showFindDataMenu = async (): Promise<void> => {
  const { id } = await prompts({
    type: 'text',
    name: 'id',
    message: 'Insert ID of student that you want to find',
    validate: (id) => {
      if (!id) {
        return "ID can't be empty"
      }
      if (isNaN(id)) {
        return 'ID is not valid'
      }
      return true
    },
  })

  const userIndex = db.getIndex('/mahasiswa', id)
  if (userIndex === -1) {
    console.clear()
    console.error('Data not found!')
    const response = await prompts({
      type: 'confirm',
      name: 'isTryAgain',
      message: 'Try again?',
      initial: true,
    })
    console.clear()
    if (response.isTryAgain) {
      return showFindDataMenu()
    } else {
      return showMainMenu()
    }
  }
  const userData = db.getData(`/mahasiswa[${userIndex}]`)
  showTable(userData)
}

const actionMenu = (menu: string) => {
  console.clear()
  switch (menu) {
    case 'read':
      readData()
      break
    case 'find':
      console.clear()
      showFindDataMenu()
      break
    case 'add':
      showAddDataMenu()
      break
    case 'delete':
      // deleteDataMenu()
      break
    case 'exit':
      console.log('Thanks for using this program, bye bye!')
      process.exit(0)
  }
}

const showMainMenu = async () => {
  const { menu } = await prompts({
    type: 'select',
    name: 'menu',
    message: 'What are you going to do?',
    choices: [
      { title: 'Read data', value: 'read' },
      { title: 'Find data', value: 'find' },
      { title: 'Add data', value: 'add' },
      { title: 'Update data', value: 'update' },
      { title: 'Delete data', value: 'delete' },
      { title: 'Exit program', value: 'exit' },
    ],
  })

  actionMenu(menu)
}

showMainMenu()
