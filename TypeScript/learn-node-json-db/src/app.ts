import prompts from 'prompts'
import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

const db = new JsonDB(new Config('unibba', true, true, '/'))

const addDataMenu = async () => {
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
    mainMenu()
  } catch (err) {
    console.clear()
    console.error(err)
    addDataMenu()
  }
}

const readData = async () => {
  const data = db.getData('/mahasiswa')
  console.table(data)
  const response = await prompts({
    type: 'confirm',
    name: 'isBackToMenu',
    message: 'Back to main menu?',
    initial: true,
  })

  if (response.isBackToMenu) {
    console.clear()
    mainMenu()
  } else {
    console.clear()
    readData()
  }
}

const actionMenu = (menu: string) => {
  console.clear()
  switch (menu) {
    case 'read':
      readData()
      break
    case 'add':
      addDataMenu()
      break
    case 'delete':
      deleteDataMenu()
      break
    case 'exit':
      console.log('Thanks for using this program, bye bye!')
      process.exit(0)
  }
}

const mainMenu = async () => {
  const { menu } = await prompts({
    type: 'select',
    name: 'menu',
    message: 'What are you going to do?',
    choices: [
      { title: 'Read data', value: 'read' },
      { title: 'Add data', value: 'add' },
      { title: 'Update data', value: 'update' },
      { title: 'Delete data', value: 'delete' },
      { title: 'Exit program', value: 'exit' },
    ],
  })

  actionMenu(menu)
}

mainMenu()
